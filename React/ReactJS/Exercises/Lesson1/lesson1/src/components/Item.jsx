import React from 'react'

const Item = ({name, isPacked}) => {
  return (
    <li className='item'>
        {name} {isPacked && '✔'}      
    </li>
  )
}

export default Item