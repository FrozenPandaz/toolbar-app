import { contentReducer } from './content.reducer';
import { contentInitialState } from './content.init';
import { Content } from './content.interfaces';
import { DataLoaded } from './content.actions';

describe('contentReducer', () => {
  it('should work', () => {
    const state: Content = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = contentReducer(state, action);
    expect(actual).toEqual({});
  });
});
