// Main scene constants — tweak MAIN_SCALE_FACTOR to zoom in/out the map,
// MAIN_PLAYER_SPEED to change how fast the character moves.

import { k } from './kaboomCtx';
import { projects } from './data/projects';
import { experience } from './data/experience';
import { skillsContent } from './data/skills';
import { profileDialogues } from './data/profile';

export const fullWidth = k.width();
export const fullHeight = k.height();
export const halfWidth = k.width() / 2;
export const halfHeight = k.height() / 2;

export const MAIN_BG_COLOR = '#112211';
export const MAIN_SCALE_FACTOR = 3.5;
export const MAIN_PLAYER_SPEED = 250;

export const mainData = {
  computer: {
    uiBase: 'ui-large',
    ui: 'computer',
    uiClose: 'computer-btn-close',
    content: { projects, experience },
  },
  resume: {
    uiBase: 'ui-medium',
    ui: 'resume',
    uiClose: 'resume-btn-close',
    content: {},
  },
  skills: {
    uiBase: 'ui-medium',
    ui: 'skills',
    uiClose: 'skills-btn-close',
    content: skillsContent,
  },
  degree: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: profileDialogues.degree,
  },
  about: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: profileDialogues.about,
  },
  bag: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: profileDialogues.bag,
  },
  food: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: profileDialogues.food,
  },
  music: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: profileDialogues.music,
  },
  art: {
    uiBase: 'ui-small',
    ui: 'dialogue',
    uiClose: 'dialogue-btn-close',
    content: profileDialogues.art,
  },
};
