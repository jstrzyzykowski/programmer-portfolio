import {Action, MenuTypes} from './menu.types';

const initialState = {
  isActive: false,
};

export interface MenuState {
  isActive: boolean,
}

const menuReducer = (state: MenuState = initialState, action: Action): MenuState => {
  switch (action.type) {
    case MenuTypes.TOGGLE:
      return {
        isActive: !state.isActive,
      };
    case MenuTypes.HIDE:
      return {
        isActive: false,
      }
    case MenuTypes.SHOW:
      return {
        isActive: true,
      }
    default:
      return state;
  }
}

export default menuReducer;

