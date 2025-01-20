import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { css } from '@emotion/react'

const Contact = () => {
  // const contact = useLoaderData()
  // console.log('contact: ',contact)
  const {
    name: { first, last, title },
    email,
    cell,
    picture,
  } = useLoaderData()
  return (
    <section
      css={css`
        margin: 16px;
        padding: 16px;
        display: grid;
        grid-template-columns: 200px 1fr;
        column-gap: 16px;
        border: 1px solid lightblue;
        border-radius: 8px;
      `}
    >
      <section>
        <img
          css={css`
            width: 100%;
            height: 100%;
            object-fit: contain;
          `}
          src={picture.large}
          alt={first}
        />
      </section>
      <article
        css={css`
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
        `}
      >
        <h1>
          {title}
          {first} {last}
        </h1>
        <h2>{email}</h2>
        <h2>{cell}</h2>
      </article>
    </section>
  )
}

export default Contact
