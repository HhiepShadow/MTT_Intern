import React from 'react'
import Item from './Item'

const PackingList = () => {
  return (
      <div>
          <h1>Sally Ride's Packing List</h1>
          <ul>
              <Item
                isPacked={true}
                name="Space suit"  
              />
              <Item
                isPacked={true}
                name="Helmet with a golden leaf"
              />
              <Item
                isPacked={false}
                name="Photo of Tam"
              />
          </ul>
    </div>
  )
}

export default PackingList