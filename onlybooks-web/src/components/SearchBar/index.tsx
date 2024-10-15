import React from "react";
import { TextField } from "@mui/material";
import { SearchBarProps } from "../../types/booksType";

const SearchBar: React.FC<SearchBarProps> = ({
  searchPlaceholder,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div
      style={{
        padding: "16px",
        marginTop: "64px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        label={searchPlaceholder}
        variant="outlined"
        value={searchQuery}
        onChange={onSearchChange}
        style={{ width: "300px" }}
      />
    </div>
  );
};

export default SearchBar;
