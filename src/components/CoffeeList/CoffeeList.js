import {
  Grid,
  Column,
  Button,
  ContainedList,
  ContainedListItem,
  Search,
} from "@carbon/react";
import { Edit } from "@carbon/icons-react";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function CoffeeList({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([[]]);
  const spanRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const listItems = data.map((item) => [
      item._id,
      `${item.roaster} - ${item.bean} | ${item.mill}`,
    ]);
    const results = listItems.filter((listItem) =>
      listItem[1].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }
  function handleEdit(event) {
    event.preventDefault();
    router.push(`/edit/${spanRef.current.id}`);
  }
  function handleClick(event) {
    event.preventDefault();
    router.push(`/view/${spanRef.current.id}`);
  }

  const itemAction = (
    <Button
      kind="ghost"
      iconDescription="Edit"
      hasIconOnly
      renderIcon={Edit}
      onClick={handleEdit}
    />
  );

  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <ContainedList label="Recipes" kind="on-page" action={""}>
          <Search
            placeholder="Filter"
            value={searchTerm}
            onChange={handleSearch}
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
              <span ref={spanRef} id={listItem[0]}>
                {listItem[1]}
              </span>
            </ContainedListItem>
          ))}
        </ContainedList>
      </Column>
    </Grid>
  );
}
