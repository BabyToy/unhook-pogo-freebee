const fetchUserByNameAndUsersCompany = async (user, services) => {
  const promises = [];
  promises.push(services.fetchUsers());
  promises.push(services.fetchStatus());
  const [users, status] = await Promise.all(promises);
  const thisUser = users.find((x) => x.name === user);
  if (!thisUser) {
    throw new Error('User not found');
  }
  const company = await services.fetchCompanyById(thisUser.companyId);
  if (!company) {
    throw new Error('Company not found');
  }
  return { company, status, user: thisUser };
};

module.exports = fetchUserByNameAndUsersCompany;
