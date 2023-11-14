const excludeByProperty = (prop, users) => {
  return users.filter((user) => {
    return !(prop in user);
  });
};

module.exports = excludeByProperty;
