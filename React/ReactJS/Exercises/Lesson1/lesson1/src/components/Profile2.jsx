import React from 'react'
import Card from './Card'
import { Avatar } from '@mui/material'

const Profile2 = () => {
  return (
    <Card>
          <Avatar
              size={100}
              person={{
                  name: 'Katsuko Saruhashi',
                  imageId: 'YfeOqp2'
              }}
          />      
    </Card>
  )
}

export default Profile2