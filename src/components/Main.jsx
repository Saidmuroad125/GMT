import { NavLink } from 'react-router-dom';
import Carusel from './Caruser';
import Location from './Location';
import Prop from './Prop';
import Monstr from './Monstr';
import Why from './Why';
import Mycarusel from './Mycarusel';
import Macser from './Macser';
import Coit from './coit';
import  Compani  from './Compani';
import Coita from './Coita';
import Imporr from './Imporr';


const Main = () => {
  

  return (
    <div className="my-8 sm:my-2 md:my-4 lg:my-6 ">
      <Carusel/>
      <div className='flex justify-between mt-[100px]'>
        <h1>Популярные категории</h1>
      <NavLink to="/katolg"
       className="border rounded-full w-[168px] h-[41px] hover:bg-[#088269] hover:text-white p-2">Все категории</NavLink>
      </div>
      <Prop/>
      <Monstr/>
      <Why/>
      <Mycarusel/>
      <Macser/>
      <Coit/>
      <Compani/>
      <Coita/>
      <Location/>
      <Imporr/>
    </div>
  );
};

export default Main;