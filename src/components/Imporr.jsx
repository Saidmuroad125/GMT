import xat from "../assets/xat.svg"
const Imporr = () => {
  return (
   <div className="flex flex-col md:flex-row justify-between bg-[#E5E4ED]">
  <div className="w-full md:w-[50%]">
    <img src={xat} alt="" />
  </div>
  <div className="w-full md:w-[50%] mt-4 md:mt-[35px]">
    <h1 className="mb-4 text-2xl font-bold">Подпишитесь и будьте в курсе!</h1>
    <p>Акции, скидки, распродажи ждут!</p>
    <div className="rounded-full bg-lime-300 w-full md:w-[540px] h-[45px] flex justify-between mt-4 md:mt-[45px]">
      <input
        type="email"
        className="w-full md:w-[80%] px-3 rounded-s-full"
        placeholder="bobo.sher314@gmail.com"
      />
      <button className="p-2 rounded-full">Подписаться</button>
    </div>
  </div>
</div>
  )
}

export default Imporr
