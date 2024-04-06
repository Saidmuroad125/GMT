import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink } from 'react-router-dom';
import { bash } from '../json/constant';
import { FcLike } from 'react-icons/fc';

const vgy = bash.map((nhy) => {
  const handleLikeClick = () => {
    const likedItem = { id: nhy.if, name: nhy.iop, pos:nhy.iot, image: nhy.jkl };
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    likedItems.push(likedItem);
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  };
  const karzinka = () => {
    const karzinkaff = { id: nhy.if, name: nhy.iop, pos:nhy.iot, image: nhy.jkl };
    const karzinkaffs = JSON.parse(localStorage.getItem("karzinkaffs")) || [];
    karzinkaffs.push(karzinkaff);
    localStorage.setItem("karzinkaffs", JSON.stringify(karzinkaffs));
  };

 

  return (
    <div className="border w-[320px] h-[523px] p-2 rounded-xl flex justify-center" key={nhy.if}>
      <div className='flex justify-center mx-auto border h-[522px]'>
        <div className="items-center justify-center text-center bg-slate-100">
          <div>
            <button className='w-[30px] m-2 border text-center px-1  rounded-full hover:bg-lime-300 justify-center' onClick={handleLikeClick}>
              <FcLike className="w-5 h-5" />
            </button>
            
            <img className='h-[250px] px-[3]' src={nhy.jkl} alt="aaaaaaaaaaaa" />
          </div>
          <div className='w-[296px] text-start p-2'>
            <h2 className='text-2xl font-bold'>{nhy.iop}</h2>
            <p>Артикул{nhy.Артикул}</p>
            <p>{nhy.ios}</p>
            <h4 className='text-xl font-bold'>{nhy.iot}</h4>
          </div>
          <button onClick={karzinka}  className='w-full p-2 text-center border rounded-full hover:bg-yellow-300 text-lime-500'>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
});

const Mycarusel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
   <div className="mt-[150px] container mx-auto">
  <div className="flex flex-col sm:flex-row">
    <div className="w-full sm:w-60">
      <h1 className="text-3xl font-bold w-full sm:w-[250px]">Каталог товаров</h1>
      <ul>
        <li>Хиты продаж</li>
        <li>Новинки</li>
        <li>Акции</li>
      </ul>
    </div>
    <div className="flex gap-5 overflow-x-auto overflow-y-hidden ml-[150px]">
      {vgy}
      {vgy}
    </div>
  </div>

  <div className="flex flex-col justify-between mt-5 sm:flex-row">
    <div className="flex gap-5">
      <button className="w-10 h-10 p-2 border rounded-full hover:bg-lime-200" onClick={() => handleSelect(selectedIndex - 1)}>
        <FaArrowLeft />
      </button>
      <button className="w-10 h-10 p-2 border rounded-full hover:bg-lime-200" onClick={() => handleSelect(selectedIndex + 1)}>
        <FaArrowRight />
      </button>
    </div>
    <div className="flex justify-end gap-3 mt-5 sm:mt-0">
      <button className="border rounded-full w-full sm:w-[178px] h-[41px] hover:bg-[#088269] hover:text-white text-xs">Бесплатная консультация</button>
      <NavLink to="/tavar" className="border text-center py-1 rounded-full w-full sm:w-[168px] h-[41px] hover:bg-[#088269] hover:text-white">
        Все товары
      </NavLink>
    </div>
  </div>
</div>
  );
};

export default Mycarusel;