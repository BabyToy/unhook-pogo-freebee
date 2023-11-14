const sumDeep = require('./sumDeep');
const excludeByProperty = require('./excludeBy');
const stripPrivateProperties = require('./strip');
const applyStatusColor = require('./applyStatusColor');

/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (props, users) => stripPrivateProperties(props, users);
exports.excludeByProperty = (prop, users) => excludeByProperty(prop, users);
exports.sumDeep = (data) => sumDeep(data);
exports.applyStatusColor = (colors, state) => applyStatusColor(colors, state);
// exports.createGreeting = () => {};
// exports.setDefaults = () => {};
// exports.fetchUserByNameAndUsersCompany = () => {};
