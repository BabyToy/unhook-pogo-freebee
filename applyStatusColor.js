const applyStatusColor = (colors, state) => {
  const result = state
    .map((x) => {
      const { status } = x;
      const thisState = { status, color: '' };
      thisState.color = colors.red.includes(status)
        ? 'red'
        : colors.green.includes(status)
        ? 'green'
        : 'undefined';
      return thisState;
    })
    .filter((x) => x.color !== 'undefined');
  return result;
};

module.exports = applyStatusColor;
