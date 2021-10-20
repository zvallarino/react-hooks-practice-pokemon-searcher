import React, { useState } from "react";


function Search({  search, setSearch }) {


  function setterOfSerach(e){
    setSearch(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange = {setterOfSerach} value ={search} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
