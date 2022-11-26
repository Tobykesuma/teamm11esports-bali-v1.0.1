import React from 'react'

const helmet = (props) => {
    document.title = props.title + ' - Team M11 Esports Bali';
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default helmet