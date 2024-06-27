import React from 'react'

const Header = ({title}: {title: string}) => {
  return (
      <div style={{
          backgroundColor: 'navy',
          color: 'white',
          fontSize: '40px',
          padding: '10px 0'
      }}>
          {title}
    </div>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header