// const URL =
//   'https://randomuser.me/api/?results=50&seed=4c8f9ad7f97ac8ff&inc=name,email,id,picture,cell'

export async function loadContacts() {
  const result = await fetch(URL)
  return (await result.json())?.results ?? null
}
