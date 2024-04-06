import  { useEffect, useState } from 'react';

const Harzinka = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("karzinkaffs")) || [];
    if (storeData.length === 0) {
      alert(`malumot yuq`);
    }
    setProducts(storeData);
  }, []);

  const handeDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    localStorage.setItem("karzinkaffs", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  return (
   <>
  <div className='flex justify-center w-full pt-20 md:pt-40'>
    <div className='flex-wrap w-full gap-10 mx-auto '>
      {products.map((item, index) => (
        <div key={index} className="container flex flex-col items-center justify-between w-full h-auto gap-10 mx-auto mb-10 border-2 rounded-md md:w-1/2 lg:w-1/2 xl:w-3/5 md:flex-row md:h-250px ">
          <img src={item.image} alt="" className='w-52 h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72' />

          <p className='h-full pt-20 pr-5 border-r'>{item.name}</p>
          <p className='h-full pt-20 pr-5 border-r'>{item.pos}</p>
          <button className="px-4 py-2 mr-4 text-white bg-red-500 rounded-md md:mr-24" onClick={() => handeDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
</>

  );
};

export default Harzinka;