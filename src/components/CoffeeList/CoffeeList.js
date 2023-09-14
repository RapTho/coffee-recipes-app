import {
  Button,
  ContainedList,
  ContainedListItem,
  Search,
} from "@carbon/react";
import { Edit } from "@carbon/icons-react";
import React, { useEffect, useState } from "react";

export default function CoffeeList({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const listItems = data.map(
      (item) =>
        `${item.roaster} - ${item.bean}:   mill: ${item.mill}  |  input: ${item.input}  |  output: ${item.output}`
    );
    const results = listItems.filter((listItem) =>
      listItem.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const itemAction = (
    <Button kind="ghost" iconDescription="Edit" hasIconOnly renderIcon={Edit} />
  );
  const handleEdit = (event) => {};
  const handleClick = (event) => {};

  return (
    <ContainedList label="Recipes" kind="on-page" action={""}>
      <Search
        placeholder="Filter"
        value={searchTerm}
        onChange={handleChange}
        closeButtonLabelText="Clear search input"
        size="lg"
        labelText="search"
      />
      {searchResults.map((listItem, key) => (
        <ContainedListItem
          key={key}
          action={itemAction}
          onClick={handleClick}
          className="coffee-list-list-item"
        >
          {listItem}
        </ContainedListItem>
      ))}
    </ContainedList>
  );
}
