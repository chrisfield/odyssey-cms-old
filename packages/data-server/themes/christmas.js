const header = {
  'background-color': 'red',
  'border': '2px dotted gold',
  'padding': '20px'
};

const headerHover = {
  'background-color': 'yellow'
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
