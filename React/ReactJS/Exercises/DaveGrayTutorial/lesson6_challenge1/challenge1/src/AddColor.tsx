import React, { Dispatch, SetStateAction, useRef } from "react";

const AddColor = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  const colorRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="searchForm"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <input
        autoFocus
        ref={colorRef}
        type="text"
        placeholder="Add color name"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </form>
  );
};

export default AddColor;
