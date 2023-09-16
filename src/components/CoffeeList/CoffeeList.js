import {
  Grid,
  Column,
  Button,
  ContainedList,
  ContainedListItem,
  Search,
} from "@carbon/react";
import { Edit } from "@carbon/icons-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CoffeeList({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([[]]);

  const router = useRouter();

  useEffect(() => {
    const listItems = data.map((item) => [
      item._id,
      `${item.roaster} - ${item.bean}`,
    ]);
    const results = listItems.filter((listItem) =>
      listItem[1].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const itemAction = (
    <Button kind="ghost" iconDescription="Edit" hasIconOnly renderIcon={Edit} />
  );
  const handleEdit = (event) => {};
  const handleClick = (event) => {
    event.preventDefault();

    const itemId = event.target.querySelector("button > div > span").id;
    router.push(`/recipe/${itemId}`);
  };

  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
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
              <span id={listItem[0]}>{listItem[1]}</span>
            </ContainedListItem>
          ))}
        </ContainedList>
      </Column>
    </Grid>
  );
}
