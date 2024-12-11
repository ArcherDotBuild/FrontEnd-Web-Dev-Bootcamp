import React, { useRef } from 'react'

const KittyGallery = () => {
  const galleryRef = useRef(null)
  const index = useRef(0)

  function showNextImage() {
    console.log('galleryRef.current: ', galleryRef.current)
    const imageList = galleryRef.current.querySelectorAll('.image')
    index.current = index.current + 1 >= imageList.length ? 0 : index.current + 1
    console.log('imageList: ', imageList)
    imageList[index.current].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  return (
    <section>
      <h2>Kitty Gallery</h2>
      <button onClick={showNextImage}>Next</button>
      <ul ref={galleryRef} className='gallery'>
        <li className='image'>
          <img src='https://placecats.com/200/300' alt='cat' />
        </li>
        <li className='image'>
          <img src='https://placecats.com/200/350' alt='cat' />
        </li>
        <li className='image'>
          <img src='https://placecats.com/300/300' alt='cat' />
        </li>
      </ul>
    </section>
  )
}

export default KittyGallery
