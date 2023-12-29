const sumDeep = require('./p3');
const excludeByProperty = require('./p2');
const stripPrivateProperties = require('./p1');
const applyStatusColor = require('./p4');
// const setDefaults = require("./p6");
// const createGreeting = require('./createGreeting');
const fetchUserByNameAndUsersCompany = require("./p7");
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
// exports.createGreeting = (phrase, name) => createGreeting(phrase, name);
// exports.setDefaults = (object) => setDefaults(object);
exports.fetchUserByNameAndUsersCompany = (user, services) => fetchUserByNameAndUsersCompany(user, services);
