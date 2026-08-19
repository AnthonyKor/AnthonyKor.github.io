// Game configuration for the mini Flappy Bird game inside the RPG.
// Tweak these values to change how the mini-game feels.

import { k } from '../kaboomCtx';

export const fullWidth = k.width();
export const fullHeight = k.height();
export const halfWidth = k.width() / 2;
export const halfHeight = k.height() / 2;

export const gameTextColor = k.color(2, 0, 53);
export const gamePipeColor = k.color(125, 206, 235);

export const GAME_PLAYER_SCALE_FACTOR = 0.5;
export const GAME_PLAYER_JUMP = 650;
export const GAME_GRAVITY = 2000;
export const GAME_BOUNDARY_BUFFER = 25;

export const GAME_PIPE_SCALE_FACTOR = 2;
export const GAME_PIPE_GAP = 250;
export const GAME_PIPE_SPEED = 150;
export const GAME_PIPE_RAND = 75;
