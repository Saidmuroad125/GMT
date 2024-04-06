import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { items } from '../json/itms';



function Carusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
  onExiting={() => setAnimating(true)}
  onExited={() => setAnimating(false)}
  key={item.src}
>
  <div className='flex justify-between bg-[#E5E4ED]'>
    <div className='mt-[32px] ml-[60px]'>
      <h1 className='text-5xl text-black h-[106px] mb-[25px] w-[538px] sm:text-4xl sm:h-[80px] sm:mb-[15px] sm:w-[400px]'>{item.text}</h1>
      <p className='w-[379px] h-[44px] text-start sm:w-[300px] sm:h-[30px]'>{item.caption}</p>
      <div className='mt-[50px] flex flex-col sm:flex-row gap-3 mb-[33px]'>
        <button className="border rounded-full w-[168px] h-[41px] hover:bg-[#088269] hover:text-white">Запросить цену</button>
        <NavLink to="/katolg" className="border rounded-full w-[168px] h-[41px] text-center pt-1 hover:bg-[#088269] hover:text-white">В каталог</NavLink>
      </div>
    </div>
    <div><img src={item.src} alt={item.altText} className='w-[100%] sm:w-auto' /></div>
  </div>
</CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
      className='w-10 h-10 mt-[19%] ml-[80%]   bg-[#088269] border rounded-full'
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        
      />
      
      <CarouselControl
      className='w-10 bg-[#088269] h-10 mt-[19%] ml-[80%]  border rounded-full'
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carusel;