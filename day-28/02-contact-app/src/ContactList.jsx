import React from 'react'
import { css } from '@emotion/react'
import { NavLink, useLoaderData } from 'react-router-dom'

const ContactList = ({searchText}) => {
  console.log('searchText: ',searchText)
  const contacts = useLoaderData() ?? []
  const filterContacts = contacts.filter(contact => {
    const {first, last} = contact.name
    return first.includes(searchText) || last.includes(searchText)
  })
  console.log('contacts', contacts)
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
      `}
    >
      {filterContacts?.length
        ? filterContacts.map((contact) => {
            const {
              id: { value },
              name: { first, last },
            } = contact
            return (
              <li key={value}>
                <NavLink
                  css={css({
                    display: 'block',
                    padding: '4px 8px',
                    textDecoration: 'none',
                    color: 'royalblue',
                    '&.active': {
                      background: 'royalblue',
                      color: 'white',
                    },
                    borderRadius: '8px',
                  })}
                  to={`/contacts/${value}`}
                >{`${first} ${last}`}</NavLink>
              </li>
            )
          })
        : null}
    </ul>
  )
}

/*
{ 
  "name":{"title":"Miss","first":"Zorica","last":"Ignjatović"},
  "email":"zorica.ignjatovic@example.com",
  "cell":"062-6213-017",
  "id":{"name":"SID","value":"603021746"},
  "picture":{"large":"https://randomuser.me/api/portraits/women/68.jpg",
  "medium":"https://randomuser.me/api/portraits/med/women/68.jpg",
  "thumbnail":"https://randomuser.me/api/portraits/thumb/women/68.jpg"}
}
*/

export default ContactList
