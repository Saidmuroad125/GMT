const port = [
    {
        ulcs:"https://global-mt.ru/local/templates/gmt/img/complex1.png",
        hard:"Экспресс лаборатория",
        bok:1 ,

    },
    {
        ulcs:"https://global-mt.ru/local/templates/gmt/img/complex2.png",
        hard:"Лазерная терапия",
        bok: 2 ,
    },
    {
        ulcs:"https://global-mt.ru/local/templates/gmt/img/complex3.png",
        hard:"Операционный блок",
        bok: 3 ,
    },
 
   
]
const Boss = port.map((feke, ) => {
  return (
    <div className={`mt-10 border gap-5`} key={feke.bok}>
  <div className="flex-col items-center justify-center text-center">
    <img className="h-[220px] w-[300px] sm:h-[300px] sm:w-[400px] lg:h-[400px] lg:w-[500px]" src={feke.ulcs} alt="ish kupayib ketyapti" />
    <h1 className="p-3 text-lg font-medium sm:text-xl lg:text-2xl">{feke.hard}</h1>
  </div>
</div>
  );
});
export default Boss