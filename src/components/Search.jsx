import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// Iteration 5
function Search(props) {
  return (
    <>
        <div style={{ width: 230 , margin: "20px"}}>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input  value={undefined} type="text" onChange={() => {}} />
      </div>
    </>
  );
}

export default Search;