import { createSelector } from 'reselect';

/**
 * Direct selector to the categoryPage state domain
 */
const selectSearchPageDomain = (state) => state.get('SearchPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CategoryPage
 */

const makeSelectSearchPage = () => createSelector(
  selectSearchPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectSearchPage;
export {
  selectSearchPageDomain,
};
