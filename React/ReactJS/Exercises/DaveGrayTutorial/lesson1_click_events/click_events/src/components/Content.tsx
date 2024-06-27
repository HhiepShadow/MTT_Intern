import React from 'react'

const Content = () => {
    const handleNameChange = (): string => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick1 = (): void => {
        alert('You clicked it');
    }

    const handleClick2 = (name: string): void => {
        alert(`${name} clicked it`);
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
              Hello {handleNameChange()}
          </p>
          <button onClick={handleClick1}>
              Click
          </button>
          <button onClick={() => {handleClick2(handleNameChange())}}>
              {handleNameChange()} clicked it
          </button>
    </div>
  )
}

export default Content