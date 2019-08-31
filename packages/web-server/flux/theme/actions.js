export const actionTypes = {
  LOAD_THEME: 'LOAD_THEME',
  LOAD_THEME_SUCCESS: 'LOAD_THEME_SUCCESS',
  LOAD_THEME_FAIL: 'LOAD_THEME_FAIL'
};

export const loadTheme = name => ({
  type: actionTypes.LOAD_THEME,
  name
});

export const loadThemeSuccess = (name, theme) => ({
  type: actionTypes.LOAD_THEME_SUCCESS,
  name,
  theme
});

export const loadThemeFail = (error) => ({
  type: actionTypes.LOAD_THEME_FAIL,
  error
});
