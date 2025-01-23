// const URL =
//   'https://randomuser.me/api/?results=50&seed=6f0145f2e462e8a6&inc=name,email,id,picture,cell&nat=IN'

export async function loadContacts() {
  const result = await fetch(URL)
  return (await result.json())?.results ?? null
}

export async function loadContact(contactId) {
  // No API contact by Id
  const contacts = await loadContacts()
  return contacts.find((contact) => contact.id.value === contactId) ?? null
}
