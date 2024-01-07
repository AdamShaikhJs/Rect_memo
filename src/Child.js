import React, { useState, useEffect } from 'react';

const ChildList = () => {
  const [data, setData] = useState([]);
  console.log('------  child component is render   ----------');
  const fetchData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let res2 = await response.json();
    setData(res2);
  };

  useEffect(() => {
    fetchData();
    return () => fetchData();
  }, []);
  return (
    <>
      <h6> child component</h6>
      <div>
        {data.map((val, i) => {
          return (
            <div key={i}>
              <li> Name : {val.name} </li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(ChildList);
