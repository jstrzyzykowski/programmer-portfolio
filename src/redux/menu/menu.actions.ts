import {MenuTypes} from './menu.types';

export interface ToggleMenuAction {
  type: MenuTypes.TOGGLE,
}

export function toggleMenu(): ToggleMenuAction {
  return {
    type: MenuTypes.TOGGLE,
  }
}

export interface HideMenuAction {
  type: MenuTypes.HIDE,
}

export function hideMenu(): HideMenuAction {
  return {
    type: MenuTypes.HIDE,
  }
}

export interface ShowMenuAction {
  type: MenuTypes.SHOW,
}

export function showMenu(): ShowMenuAction {
  return {
    type: MenuTypes.SHOW,
  }
}