import React, { useState } from 'react'

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);

    const handleNameChange = (): void => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleIncrementCountClick = () => {
        setCount(count + 1);
        alert(count);
    }

    return (
      <div style={
          {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
        }>
          <p style={{
              marginRight: '10px'
            }}>
              Hello {name}
          </p>
          <button
              onClick={handleNameChange}
              style={{marginRight: '10px'}}
              >
              Click
          </button>

          <button onClick={handleIncrementCountClick}>
              Increment 
          </button>
        </div>
  )
}

export default Content