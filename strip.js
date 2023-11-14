const stripPrivateProperties = (props, users) => {
  return users.map((user) => {
    const tempObject = { ...user };
    props.map((prop) => {
      delete tempObject[prop];
    });
    return tempObject;
  });
};

module.exports = stripPrivateProperties;
