import { FcLike } from "react-icons/fc";
import { ApiImg } from "../json/Api";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Apimap = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLikeClick = () => {
    if (selectedItem) {
      const likedItem = { id: selectedItem, image: selectedItem };
      const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
      likedItems.push(likedItem);
      localStorage.setItem("likedItems", JSON.stringify(likedItems));
    }
  };

  const karzinka = () => {
    if (selectedItem) {
      const karzinkaff = { id: selectedItem, image: selectedItem };
      const karzinkaffs = JSON.parse(localStorage.getItem("karzinkaffs")) || [];
      karzinkaffs.push(karzinkaff);
      localStorage.setItem("karzinkaffs", JSON.stringify(karzinkaffs));
    }
  };

  return (
    <div className="container flex flex-wrap gap-5 mx-auto mt-5">
      {ApiImg.map((item, idImg) => (
        <div
          className="shadow-xl w-[320px] h-[523px] p-2 rounded-xl flex justify-center gap-5 cursor-pointer"
          onClick={() => handleOpen(item)}
          key={idImg}
        >
          <div className='flex m-hover justify-center mx-auto  h-[522px]'>
            <div className="items-center justify-center text-center n-hover ">
              <div className="a-hover">
                <button className='w-[30px] m-2 border text-center px-1  rounded-full hover:bg-lime-300 justify-center' onClick={handleLikeClick}>
                  <FcLike className="w-5 h-5" />
                </button>
                <img className='h-[250px] px-[3] ' src={item} alt="aaaaaaaaaaaa" />
              </div>
              <div className='w-[296px] text-start p-2'>
                <h2 className='text-2xl font-bold'>Анализатор мочи MIND UA-66</h2>
                <p>Артикул{213134}</p>
                <p>В наличи</p>
<h4 className='text-xl font-bold'>300 000 руб</h4>
              </div>
              <button onClick={karzinka} className='w-full p-2 text-center border rounded-full hover:bg-yellow-300 text-lime-500'>Добавить в корзину</button>
            </div>
          </div>
        </div>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <button className='w-[30px] m-2 border text-center px-1  rounded-full hover:bg-lime-300 justify-center' onClick={handleLikeClick}>
                  <FcLike className="w-5 h-5" />
                </button>
            <img src={selectedItem} alt="" />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='w-[296px] text-start p-2'>
                <h2 className='text-2xl font-bold'>Анализатор мочи MIND UA-66</h2>
                <p>Артикул{213134}</p>
                <p>В наличи</p>
<h4 className='text-xl font-bold'>300 000 руб</h4>
              </div>
              <button onClick={karzinka} className='w-full p-2 text-center border rounded-full hover:bg-yellow-300 text-lime-500'>Добавить в корзину</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Apimap;