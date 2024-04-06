import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { bash } from '../json/constant';

const style = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleSearch = () => {
    const results = bash.filter(item => {
      const { jkl, iop, iot, Артикул, ios } = item;
      // Arama kriterlerine göre nesneyi filtrele
      return (
        jkl.includes(searchTerm) ||
        iop.includes(searchTerm) ||
        iot.includes(searchTerm) ||
        Артикул.includes(searchTerm) ||
        ios.includes(searchTerm)
      );
    });

    setSearchResults(results);

    if (results.length > 0) {
      handleOpen(results[0]); // Open the modal with the first item from the search results
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex items-center rounded-full bg-slate-200 ml-[50px]">
        <select name="Все категории" className="w-[146px] h-[39px] rounded-s-full bg-[#EFEFEF]">
          <option value="Новости">Новости</option>
          <option value="Статьи">Статьи</option>
          <option value="Видео">Видео</option>
        </select>
        <input
          type="search"
          className="w-[265px] h-39px rounded-e-full p-2 bg-[#EFEFEF]"
          placeholder="Поиск"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <button onClick={handleSearch}>
          <CiSearch className="w-[24px] h-[24px] mx-2" />
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="mt-3 overflow-y-auto "
      >
        <Box sx={style  }>
          <div className="flex flex-wrap gap-5 mt-5">
            {searchResults.map(item => (
              <div
                className="flex mx-auto h-400px h-[300px] border"
                key={item.if}
              >
                <div className="flex items-center justify-center text-center">
                  <div className="">
                    <img
                      className="h-[250px] w-[250px] px-3"
                      src={item.jkl}
                      alt="aaaaaaaaaaaa"
                    />
                  </div>
                  <div className="w-[296px] text-start p-2">
                    <h2 className="text-2xl font-bold">{item.iop}</h2>
                    <p>Артикул:{item.Артикул}</p>
                    <p>{item.ios}</p>
                    <h4 className="text-xl font-bold">{item.iot}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Search;