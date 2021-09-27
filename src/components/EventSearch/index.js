import { debounce } from "lodash";
import React, { useState, useCallback } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../../store";
import { searchCalendarEvent } from "../../store/slices/calendarEventSlice";
import "./EventSearch.css";

const EventSearch = () => {
  const [searchStr, setSearchStr] = useState("");
  const dispatch = useAppDispatch();

  // eslint-disable-next-line
  const searchEvent = useCallback(
    debounce((searchText) => {
      dispatch(searchCalendarEvent(searchText));
    }, 1000),
    []
  );

  const handleSearchChange = (event) => {
    const searchText = event.target.value.trim();
    setSearchStr(searchText);
    searchEvent(searchText);
  };

  return (
    <div className="eventSearch">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          minWidth: 275,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search event"
          value={searchStr}
          onChange={handleSearchChange}
          inputProps={{ "aria-label": "Search event" }}
        />
        <IconButton
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => setSearchStr(searchStr)}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default EventSearch;
