import { Content } from './content.interfaces';
import { ContentAction } from './content.actions';

export function contentReducer(state: Content, action: ContentAction): Content {
  switch (action.type) {
    case 'ADD_CONTENT': {
      return {
        ...state,
        contents: [
          ...state.contents,
          action.payload
        ]
      }
    }
    default: {
      return state;
    }
  }
}
