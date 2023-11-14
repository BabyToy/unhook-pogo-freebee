const sumDeep = (data) => {
  const result = data.map((datum) => {
    const total = datum.objects.reduce((acc, object) => acc + object.val, 0);
    return { objects: total };
  });
  return result;
};

module.exports = sumDeep;
