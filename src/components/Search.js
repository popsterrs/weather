import React from 'react';
import { Button } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

function Search() {



  return (
    <div id="search-container" class="search-container">
        <div class="search-container-top">
          <SearchOutlined class="nav-bar-icon nav-bar-search-icon search-container-top-icon"/>
          <input type="text" placeholder="Search..."></input>
          <Button id="escape" class="nav-bar-button-right" variant="outlined">
            esc
          </Button>
        </div>
        <div class="search-container-bottom">

        </div>
    </div>
  );
}

export default Search;

