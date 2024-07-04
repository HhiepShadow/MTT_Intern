const ListItem = ({ item }: { item: string}) => {
  return (
    <div>
          {JSON.stringify(item)}
    </div>
  )
}

export default ListItem