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
    const listItems = [
      "List item 1",
      "List item 2",
      "List item 3",
      "List item 4",
    ];
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
      />
      {searchResults.map((listItem, key) => (
        <ContainedListItem key={key} action={itemAction} onClick={handleClick}>
          {listItem}
        </ContainedListItem>
      ))}
    </ContainedList>
  );
}
