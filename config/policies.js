module.exports.policies = {
  '*': true,
  'AdminController': {
    '*': 'isAdmin'
  }
};
