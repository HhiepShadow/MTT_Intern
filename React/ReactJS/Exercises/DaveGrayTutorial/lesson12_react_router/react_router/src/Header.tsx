import React from 'react'

export const Header = ({title}: {title: string}) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
    </header>
  );
}
