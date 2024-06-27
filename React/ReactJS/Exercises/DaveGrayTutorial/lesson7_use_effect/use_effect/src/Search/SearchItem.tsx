import React, { Dispatch, SetStateAction, useRef } from 'react'

const SearchItem = ({ search, setSearch }: {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}) => {

    const searchRef = useRef<HTMLInputElement>(null);

  return (
      <form
        className='searchForm'
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
          <label htmlFor='search'>Search</label>
          <input
              autoFocus
              ref={searchRef}
              id='search'
              type='text'
              role='searchbox'
              placeholder='SearchItem'
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value) }}
          />
    </form>
  )
}

export default SearchItem