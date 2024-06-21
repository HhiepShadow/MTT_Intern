import React from 'react'

const Item = ({ name, isPacked }) => {
  if (isPacked) {
    return null;
  }
  return (
    <li className='item'>
        {name} {isPacked && '✔'}      
    </li>
  )
}

export default Item