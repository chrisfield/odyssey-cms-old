const header = {
  'background-color': 'cyan',
  'border': '2px dotted blue',
  'padding': '20px'
};

const headerHover = {
  'background-color': 'red'
};

const headerAfter = {
  'display': 'block',
  'width': '100%',
  'content': '""',
  'border': '10px solid green'
};

const footer = {
  'background-color': 'cyan',
  'border-top': '2px solid blue'
};

const theme = {
  header,
  headerHover,
  headerAfter,
  footer,
  email: {
    header,
    footer
  }
};

module.exports = theme;
