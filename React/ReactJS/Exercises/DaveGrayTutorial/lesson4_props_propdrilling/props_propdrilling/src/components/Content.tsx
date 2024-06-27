import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);

    // List:
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            name: 'Item 1'
        },
        {
            id: 2,
            checked: true,
            name: 'Item 2'
        },
        {
            id: 3,
            checked: false,
            name: 'Item 3'
        }
    ]);

    // Handle list:
    const handleCheck = (id: number): void => {
        // alert(`Keys: ${id}`);
        // items.map((item, itemId) => {
        //     if (id === itemId) {
        //         return {
        //             ...item,
        //             checked: !item.checked
        //         }
        //     } else {
        //         return item;
        //     }
        // })
        const listItems = items.map((item) => item.id === id ? {
            ...item,
            checked: !item.checked
        } : item);
        setItems(listItems);
        localStorage.setItem('listItems', JSON.stringify(listItems));
    }

    const handleDelete = (id: number): void => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('listItems', JSON.stringify(listItems));
        alert(id);
    }

    // Button Events
    const handleNameChange = (): void => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleIncrementCountClick = (): void => {
        setCount(count + 1);
        alert(count);
    }

    return (
    <>
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
            
        <div style={
            {
              marginTop: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
        }>{items.length ? (
                    
            <ul>
                {items.map((item) => (
                    <li key={item.id} className='item'>
                        <input
                            onChange={() => handleCheck(item.id)}
                            type="checkbox"
                            checked={item.checked}
                            />
                        <label
                            style={(item.checked) ? { textDecoration: 'line-through'} : {textDecoration: 'none'}}
                            >{item.name}</label>
                        {/* <button>Delete</button> */}
                        <FaTrashAlt role='button' tabIndex={0} onClick={() => handleDelete(item.id)}/>
                    </li>   
                ))}
            </ul>
                ) : (   
            <p style={{ marginTop: '2rem' }}>
                Your list is Empty                
            </p>
        )} 
        </div>
    </>
  )
}

export default Content