import { useState } from 'react'
import './App.css'
import BoxColor from './BoxColor'
import AddColor from './AddColor';

function App() {
  const [search, setSearch] = useState<string>('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <BoxColor
        width={200}
        height={200}
        backgroundColor={search}
      />
      <AddColor
        search={search}
        setSearch={setSearch}
      />
    </div>
  )
}

export default App
