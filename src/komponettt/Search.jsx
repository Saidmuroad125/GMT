// import  { useState } from 'react';
// import { bash } from '../json/constant';

function SearchComponent() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     const results = bash.filter(item => {
//       const { jkl, iop, iot, Артикул, ios } = item;
//       // Arama kriterlerine göre nesneyi filtrele
//       return (
//         jkl.includes(searchTerm) ||
//         iop.includes(searchTerm) ||
//         iot.includes(searchTerm) ||
//         Артикул.includes(searchTerm) ||
//         ios.includes(searchTerm)
//       );
//     });

//     setSearchResults(results);
//   };

  return (
    <div>
      <input
        type="text"
        // value={searchTerm}
        // onChange={event => setSearchTerm(event.target.value)}
      />
      {/* <button onClick={handleSearch}>Ara</button> */}

      <ul>
        {/* {searchResults.map(item => (
          <li key={item.if}>
            <img src={item.jkl} alt="" />
            <div>{item.iop}</div>
            <div>{item.iot}</div>
            <div>{item.Артикул}</div>
            <div>{item.ios}</div>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default SearchComponent;