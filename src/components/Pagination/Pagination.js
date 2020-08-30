import React from 'react';
import './Pagination.css';

const renderPagination = (n, fn) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
     arr.push(i);
  }  
  return arr.map((item, index) => {  
    return (
      <li className={index === 0 ? "page-item active" : "page-item"} 
           key={index} 
           onClick={() => fn(index)}>
        <a className="page-link" href="/#">{index + 1}</a>
      </li>
    );    
  });
}

const Pagination = ({pageOnClick}) => {
  const pages = renderPagination(12, pageOnClick);
  return (
    <div className="pagination-container container">
      <ul className="pagination pagination-lg">
        {pages}
      </ul>
    </div>
  )
}

export default Pagination;