import { people } from "../data";
import { getImageUrl } from "../utils";

const List = () => {
    const listItems = people.map((person) => {
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    })
  return (
      <div>
          <h1>Scientists</h1>
          <ul>{listItems}</ul>
    </div>
  )
}

export default List