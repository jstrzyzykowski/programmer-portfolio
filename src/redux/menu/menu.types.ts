import {ToggleMenuAction, HideMenuAction, ShowMenuAction} from './menu.actions';

export enum MenuTypes {
  TOGGLE,
  HIDE,
  SHOW,
}

export type Action = ToggleMenuAction | HideMenuAction | ShowMenuAction;