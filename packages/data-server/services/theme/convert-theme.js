const camelCaseToDash = myStr => (
  myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase()
);

const stylesToString = styles => (
  Object.keys(styles).reduce((str, key) => (
    `${str} ${camelCaseToDash(key)}: ${styles[key]};`
  ), '')
);

const convertTheme = theme => {
  const convertedTheme = {};
  Object.keys(theme).forEach(key => {
    if (key === 'email') {
      convertedTheme[key] = theme[key];    
    } else {
      convertedTheme[key] = stylesToString(theme[key]);
    }
  });
  return convertedTheme;
};

module.exports = convertTheme;
