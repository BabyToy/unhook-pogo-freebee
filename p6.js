const setDefaults = (defaultValue) => {
  return (data) => {
    const key = Object.keys(defaultValue)[0];
    const value = Object.values(defaultValue)[0];
    if (!(key in data)) {
      data[key] = value;
    }
    return data;
  };
};

module.exports = setDefaults;
