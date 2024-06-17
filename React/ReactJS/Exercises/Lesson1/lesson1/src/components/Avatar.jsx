import React from 'react'
import { getImageUrl } from '../utils'

const Avatar = ({ person, size }) => {
    return (
      <img
          className='avatar'
          src={getImageUrl(person)}
          alt={person.name}
          width={size}
          height={size}
      />
  )
}

export default Avatar