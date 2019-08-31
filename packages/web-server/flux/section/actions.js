export const actionTypes = {
  LOAD_SECTION: 'LOAD_SECTION',
  LOAD_SECTION_SUCCESS: 'LOAD_SECTION_SUCCESS',
  LOAD_SECTION_FAIL: 'LOAD_SECTION_FAIL'
};

export const loadSection = path => ({
  type: actionTypes.LOAD_SECTION,
  path
});

export const loadSectionSuccess = (path, section) => ({
  type: actionTypes.LOAD_SECTION_SUCCESS,
  path,
  section
});

export const loadSectionFail = (error) => ({
  type: actionTypes.LOAD_SECTION_FAIL,
  error
});
