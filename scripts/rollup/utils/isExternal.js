module.exports = function isExternal(id) {
  return !id.startsWith('.') && !id.startsWith('/');
};
