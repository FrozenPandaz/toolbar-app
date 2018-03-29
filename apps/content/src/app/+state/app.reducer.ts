import { App } from './app.interfaces';
import { AppAction } from './app.actions';

export function appReducer(state: App, action: AppAction): App {
  switch (action.type) {
    case 'TOGGLE_MODAL': {
      return {
        modal: !state.modal
      };
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        modal: true
      }
    }
    default: {
      return state;
    }
  }
}
