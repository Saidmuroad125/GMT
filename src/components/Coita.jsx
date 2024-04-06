import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Vsaee } from '../json/Vsaee';


const vfr = Vsaee.map((nhyv) => {
  return (
   <div className={`border w-[320px] h-[380px] bg-[#F8F7F3] rounded-xl sm:w-[480px] sm:h-[560px]`} key={nhyv.vdr}>
  <div className="w-[320px] h-[280px] rounded-xl sm:w-[480px] sm:h-[420px]">
    <img className="w-[320px] h-[193px] sm:w-[480px] sm:h-[290px]" src={nhyv.icon} alt="ish kupayib ketyapti" />
  </div>
  <h1 className="my-5 text-center">{nhyv.trh}</h1>
</div>
  );
});

const Coita = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
   <div className='mt-[150px] container mx-auto'>
  <div className='flex flex-col sm:flex-row'>
    <div className="w-60">
      <h1 className='text-3xl font-bold w-[250px] sm:w-auto'>Новости компании</h1>
    </div>
    <div className='flex gap-3 overflow-x-auto overflow-y-hidden ml-[150px] sm:ml-[0]'>
      {vfr}
      {vfr}
    </div>
  </div>

  <div className='flex flex-col sm:flex-row ml-[350px] justify-between mt-5'>
    <div className='flex gap-5'>
      <button className='p-2 border rounded-full hover:bg-lime-200' onClick={() => handleSelect(selectedIndex - 1)}>
        <FaArrowLeft />
      </button>
      <button className='p-2 border rounded-full hover:bg-lime-200' onClick={() => handleSelect(selectedIndex + 1)}>
        <FaArrowRight />
      </button>
    </div>
    <div className="flex justify-end gap-3">
      <button className="border rounded-full w-[178px] h-[41px] hover:bg-[#088269] hover:text-white text-xs">Сертификаты</button>
    </div>
  </div>
</div>
  );
};

export default Coita;