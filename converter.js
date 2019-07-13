/* eslint-disable no-console,import/no-unresolved */
// @ts-ignore
const languages = require('./demo.json');

Object.entries(languages).map(([name, params]) => {
  if (!Array.isArray(params.extensions)) {
    return [];
  }

  const scheme = params.extensions.map(extension => (`"${extension.slice(1)}": "${name}",`));

  console.log(scheme.jonu('\n'));

  return scheme;
});
