export const getFilteredContacts = (filter, data) => {
  if (!filter) {
    return data;
  }
  const searchedName = filter.toLowerCase();
  const filteredContacts = data.filter(({ name }) =>
    name.toLowerCase().includes(searchedName),
  );

  return filteredContacts;
};
