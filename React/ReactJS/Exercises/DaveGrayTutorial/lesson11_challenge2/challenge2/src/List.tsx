import ListItem from './ListItem'

const List = ({items}: {items: string[]}) => {
  return (
    <ul>
      {items.map((item) => (
        <li>
          <ListItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default List