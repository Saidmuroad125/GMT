const necke =[
    {
        fot:"https://global-mt.ru/local/templates/gmt/img/Symbol.svg",
        zet:"Быстрая  доставка",
        asd:1
    },
    {
        fot:"https://global-mt.ru/local/templates/gmt/img/Symbol(1).svg",
        zet:"Весь товар сертифицирован",
        asd:2
    },
    {
        fot:"https://global-mt.ru/local/templates/gmt/img/Symbol(2).svg",
        zet:"Гибкая система скидок",
        asd:3
    },
    {
        fot:"https://global-mt.ru/local/templates/gmt/img/Symbol(3).svg",
        zet:"Лет на рынке",
        asd:4
    },
]
const Sort = necke.map((mko, ) => {
  return (
      
<div className="border bg-[#E5E2EE] w-[320px] h-[320px] rounded-xl flex justify-center items-center mx-auto"  key= {mko.asd} >
  <div className="">
    <div>
      <img className="w-[65px] h-[73px] m-[40px] sm:w-[50px] sm:h-[56px] sm:m-[20px]" src={mko.fot} alt="" />
      <p className="w-[150px] text-center sm:w-[120px]">{mko.zet}</p>
    </div>
  </div>
</div>
  );
});



const Why = () => {
  return (
   <div className="container">
  <h1 className="text-2xl font-bold text-black">
    Почему выбирают нас?
  </h1>
  <div className="flex flex-col gap-3 mt-5 sm:flex-row sm:mt-10">
    {Sort}
  </div>
</div>
  )
}

export default Why
