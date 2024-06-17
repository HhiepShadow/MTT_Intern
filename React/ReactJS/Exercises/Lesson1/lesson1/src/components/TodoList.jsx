export default function TodoList() {
    const person = {
        name: 'Hedy Lamarr',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    }
  return (
    <div style={person.theme}>
          <h1>Hedy { person.name}'s Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </div>
  );
}