
import { fromJS } from 'immutable';
import brandPageReducer from '../reducer';

describe('brandPageReducer', () => {
  it('returns the initial state', () => {
    expect(brandPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
