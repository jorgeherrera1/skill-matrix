export const SEARCH = 'search';

export const search = (keyword) => ({
  type: SEARCH,
  payload: keyword
});
