const excludeByProperty = require('./excludeBy');
const stripPrivateProperties = require('./strip');

/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (props, users) => stripPrivateProperties(props, users);
exports.excludeByProperty = (prop, users) => excludeByProperty(prop, users);
// exports.sumDeep = () => {};
// exports.applyStatusColor = () => {};
// exports.createGreeting = () => {};
// exports.setDefaults = () => {};
// exports.fetchUserByNameAndUsersCompany = () => {};
