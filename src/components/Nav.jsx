import { NavLink } from "react-router-dom"
import { CiLocationOn } from "react-icons/ci";

const Nav = () => {
  return (
   <div className="container mx-auto">
  <div className="flex flex-col justify-between h-20 border-b border-black sm:flex-row">
    <div className="flex items-center justify-center gap-2 sm:justify-start">
      <ul className="flex flex-wrap gap-3 my-2">
        <NavLink to="/katolg" className="hover:text-red-600 text-[#202020]">Каталог</NavLink>
        <NavLink to="/tavar" className="hover:text-red-600 text-[#202020]">Все категории</NavLink>
        <NavLink to="/" className="hover:text-red-600 text-[#202020]">Кабинеты под ключ</NavLink>
        <NavLink to="/" className="hover:text-red-600 text-[#202020]">Услуги</NavLink>
        <NavLink to="/" className="hover:text-red-600 text-[#202020]">Акции</NavLink>
        <NavLink to="/" className="hover:text-red-600 text-[#202020]">Покупателям</NavLink>
        <NavLink to="/" className="hover:text-red-600 text-[#202020]">Контакты</NavLink>
      </ul>
    </div>
    <div className="flex items-center justify-center gap-2 sm:justify-end">
      <NavLink className="w-[75px] h-[19px] flex items-center gap-[px] hover:text-[#088269]" to="/location">
        Location<CiLocationOn className="w-5" />
      </NavLink>
      <button className="border rounded-full w-[168px] h-[41px] hover:bg-[#088269] hover:text-white">+7(495)000-00-00</button>
      <button className="border rounded-full w-[168px] h-[41px] hover:bg-[#088269] hover:text-white">Заказать звонок</button>
    </div>
  </div>
  
</div>
  )
}

export default Nav
