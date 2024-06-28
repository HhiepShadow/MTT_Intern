import { FaPlus } from 'react-icons/fa';
import { Dispatch, LegacyRef, MutableRefObject, SetStateAction } from 'react';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }: {
    newItem: string,
    setNewItem: Dispatch<SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void 
}) => {

    const inputRef = useRef<HTMLInputElement>(null);

  return (
      <div>
          <form
              className="addForm"
              onSubmit={handleSubmit} 
          >
              <label htmlFor="addItem">Add Item</label>
              <input
                  autoFocus
                  ref={inputRef}
                  id='addItem'
                  type="text"
                  placeholder="Add Item"
                  required
                  value={newItem ?? ''}
                  onChange={(e) => setNewItem(e.target.value)}
              />
              <button
                  type="submit"
                  aria-label="Add Item"
              >
                  <FaPlus />
              </button>
          </form>
    </div>
  )
}

export default AddItem