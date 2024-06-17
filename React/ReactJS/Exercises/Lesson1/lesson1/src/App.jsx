import Button from '@mui/material/Button';
import Gallery from './components/Gallery';
import TodoList from './components/TodoList';
import Profile2 from './components/Profile2';
import PackingList from './components/PackingList';
import { List } from '@mui/material';

const App = () => {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <Gallery />
      <TodoList />
      <Profile2 />
      <PackingList />
      <List />
    </div>
  )
}

export default App