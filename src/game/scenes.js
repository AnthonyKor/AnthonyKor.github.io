// Mini Flappy Bird game — scenes: gamestart, game, gameover.
// To swap out the mini-game entirely, replace the scene logic here.

import { k } from '../kaboomCtx';
import {
  fullWidth,
  fullHeight,
  halfWidth,
  halfHeight,
  gameTextColor,
  gamePipeColor,
  GAME_PLAYER_SCALE_FACTOR,
  GAME_PLAYER_JUMP,
  GAME_GRAVITY,
  GAME_BOUNDARY_BUFFER,
  GAME_PIPE_SCALE_FACTOR,
  GAME_PIPE_GAP,
  GAME_PIPE_SPEED,
  GAME_PIPE_RAND,
} from './config';

k.loadSprite('bg', './console/bg.png');
k.loadSprite('boundman', './console/boundman.png');
k.loadSprite('pipe', './console/pipe.png');
k.loadSound('bounce', './console/bounce.mp3');
k.loadSprite('btn-close', './console/btn-close.png');

function handleUI(playerPos) {
  k.add([
    k.sprite('bg', { width: fullWidth, height: fullHeight }),
    k.area({ shape: new k.Rect(k.vec2(0), fullWidth, fullHeight - 150) }),
    k.opacity(1),
    k.fadeIn(1),
    'bg',
  ]);

  k.add([
    k.sprite('btn-close'),
    k.scale(0.5),
    k.area({ cursor: 'url(./cursor-pointer.png), auto' }),
    k.anchor('center'),
    k.pos(halfWidth, fullHeight - 100),
    k.opacity(1),
    k.fadeIn(0.5),
    'close',
  ]);

  k.onClick('bg', () => {
    k.go('game', playerPos);
  });
  k.onKeyPress('space', () => {
    k.go('game', playerPos);
  });

  k.onHoverEnd('close', () => {
    k.setCursor('url(./cursor-default.png), auto');
  });

  function handleClose() {
    k.setCursor('url(./cursor-default.png), auto');
    k.setGravity(0);
    k.go('main', playerPos);
  }

  k.onClick('close', () => {
    handleClose();
  });
  k.onKeyPress('enter', () => {
    handleClose();
  });
}

k.scene('gamestart', (playerPos) => {
  handleUI(playerPos);

  k.add([
    k.text(
      'Space/Click/Tap to Jump' + '\n' + '\n' + 'Space/Click/Tap to Start',
      {
        font: 'monogram',
        size: 32,
      }
    ),
    gameTextColor,
    k.anchor('center'),
    k.pos(halfWidth, halfHeight),
    k.opacity(1),
    k.fadeIn(0.5),
  ]);
});

let highScore = 0;

k.scene('game', (playerPos) => {
  let score = 0;

  k.add([k.sprite('bg', { width: fullWidth, height: fullHeight })]);
  k.setGravity(GAME_GRAVITY);

  const player = k.add([
    k.sprite('boundman'),
    k.scale(GAME_PLAYER_SCALE_FACTOR),
    k.area(),
    k.body(),
    k.anchor('center'),
    k.pos(halfWidth / 2, halfHeight),
  ]);

  function producePipes() {
    const offset = k.rand(-GAME_PIPE_RAND, GAME_PIPE_RAND);

    k.add([
      k.sprite('pipe'),
      k.scale(GAME_PIPE_SCALE_FACTOR),
      gamePipeColor,
      k.area(),
      k.pos(fullWidth, halfHeight + offset + GAME_PIPE_GAP / 2),
      { passed: false },
      'pipe',
    ]);

    k.add([
      k.sprite('pipe', { flipY: true }),
      k.scale(GAME_PIPE_SCALE_FACTOR),
      gamePipeColor,
      k.area(),
      k.anchor('botleft'),
      k.pos(fullWidth, halfHeight + offset - GAME_PIPE_GAP / 2),
      'pipe',
    ]);
  }

  k.loop(3, () => {
    producePipes();
  });

  const scoreText = k.add([
    k.text(score, { font: 'monogram', size: 100 }),
    gameTextColor,
    k.pos(25, 0),
  ]);

  k.onUpdate('pipe', (pipe) => {
    pipe.move(-GAME_PIPE_SPEED, 0);

    if (pipe.passed === false && player.pos.x > pipe.pos.x) {
      pipe.passed = true;
      score += 1;
      scoreText.text = score;
    }
  });

  player.onCollide('pipe', () => {
    k.go('gameover', score, playerPos);
  });

  player.onUpdate(() => {
    if (
      player.pos.y > fullHeight + GAME_BOUNDARY_BUFFER ||
      player.pos.y < 0 - GAME_BOUNDARY_BUFFER
    ) {
      k.go('gameover', score, playerPos);
    }
  });

  function handleJump() {
    k.play('bounce');
    player.jump(GAME_PLAYER_JUMP);
  }

  k.onKeyPress('space', () => {
    handleJump();
  });

  k.onMousePress((mouseBtn) => {
    if (mouseBtn === 'left') {
      handleJump();
    }
  });
});

k.scene('gameover', (score, playerPos) => {
  if (score > highScore) {
    highScore = score;
  }

  handleUI(playerPos);

  k.add([
    k.text(
      'Game Over!' +
        '\n' +
        `Score: ${score}` +
        '\n' +
        `High Score: ${highScore}` +
        '\n' +
        '\n' +
        'Space/Click/Tap to Restart',
      {
        font: 'monogram',
        size: 32,
      }
    ),
    gameTextColor,
    k.anchor('center'),
    k.pos(halfWidth, halfHeight),
  ]);
});
