const createGreeting = (template, greeting) => {
  return (name) => template(greeting, name);
};

module.exports = createGreeting;
