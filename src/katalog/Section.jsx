import Propp from "./Propp"

const Section = () => {
  return (
   <div className="container mx-auto">
  <div className="flex flex-col mt-10 sm:flex-row">
    <div className="block w-full h-auto p-4 mb-4 border rounded-md sm:w-80 sm:mb-0 sm:mr-4">
      <h3 className="h-10 mb-3 text-xl border-b-2">Направления</h3>
      <select name="Все категории" className="w-full">
        <option value="Новости">Новости</option>
        <option value="Статьи">Статьи</option>
        <option value="Видео">Видео</option>
      </select>
      <select name="Все категории" className="w-full">
        <option value="Новости">Новости</option>
        <option value="Статьи">Статьи</option>
        <option value="Видео">Видео</option>
      </select>
      <select name="Все категории" className="w-full">
        <option value="Новости">Новости</option>
        <option value="Статьи">Статьи</option>
        <option value="Видео">Видео</option>
      </select>
      <select name="Все категории" className="w-full">
        <option value="Новости">Новости</option>
        <option value="Статьи">Статьи</option>
        <option value="Видео">Видео</option>
      </select>
      <select name="Все категории" className="w-full">
        <option value="Новости">Новости</option>
        <option value="Статьи">Статьи</option>
        <option value="Видео">Видео</option>
      </select>
      <select name="Все категории" className="w-full">
        <option value="Новости">Новости</option>
        <option value="Статьи">Статьи</option>
        <option value="Видео">Видео</option>
      </select>
      <select name="Все категории" className="w-full">
        <option value="Новости">Новости</option>
        <option value="Статьи">Статьи</option>
        <option value="Видео">Видео</option>
      </select>
      
     
      
    </div>
    <div className="w-full">
      <Propp />
    </div>
  </div>
</div>
  )
}

export default Section
