import Marquee from "react-fast-marquee";
const Vsaee = [
    {
        icon:"https://global-mt.ru/upload/iblock/99e/nqmjgop6u1sj2eiszy08vnuh8jsqdvcv/kls_martin_group.png",
        trh:"НМИЦ онкологии им. Н.Н. Блохина",
        vdr:1 
        
    },
    {
        icon:"https://global-mt.ru/upload/iblock/2aa/fz4tyn09v91peefu64isycitobwh7p04/erba_group.png",
        trh:"НМИЦ онкологии им. Н.Н. Блохина",
        vdr:2 
    },
    {
        icon:"https://global-mt.ru/upload/iblock/c5b/un71fm2pu3dd750j29wk8jkq9w1utauy/image017.png",
        trh:"НМИЦ онкологии им. Н.Н. Блохина",
        vdr:3 

    },
    {
        icon:"https://global-mt.ru/upload/iblock/ad3/k538egnzgcvlp25sv0xufbcce218npg6/atmos.png",
        trh:"НМИЦ онкологии им. Н.Н. Блохина",
        vdr:4  
    },
    {
        icon:"https://global-mt.ru/upload/iblock/a0b/zt6p9i54fsw42u7lgqwpvdw0bpfj5pap/johnson_johnson.png",
        trh:"НМИЦ онкологии им. Н.Н. Блохина",
        vdr:5 
    },
    {
        icon:"https://global-mt.ru/upload/iblock/ec0/j1go3t2m3y4hg488aqw6f5ft8qz6ph00/logo_siemens2.jpg",
        trh:"НМИЦ онкологии им. Н.Н. Блохина",
        vdr:6  
    },
    {
        icon:"https://global-mt.ru/upload/iblock/c71/xu7vzyccty243g01hjqdqz887tatziye/partner01.png",
        trh:"НМИЦ онкологии им. Н.Н. Блохина",
        vdr:7 
    },
    {
        icon:"https://global-mt.ru/upload/iblock/d27/gi22l3fjkpzgove7qr9fz0f44sygglep/pentax_medical.png",
        trh:"НМИЦ онкологии им. Н.Н. Блохина",
        vdr:8 
    },
    {
        icon:"https://global-mt.ru/upload/iblock/16c/bh3ls01gonjpzbsaf5sr8lkrjlsp4wuj/image001.png",
        trh:"НМИЦ онкологии им. Н.Н. Блохина",
        vdr:9 
    },
    {
        icon:"https://global-mt.ru/upload/iblock/705/ubfgnzoj7x7ec0ywm5xlsnj7kljq0wje/image004.png",
        trh:"НМИЦ онкологии им. Н.Н. Блохина",
        vdr:10 
    },
]

const myCompone = Vsaee.map((fekw ) => {
  return (
    <div className={` mx-5 border w-[320px] h-[280px] bg-[#F8F7F3] rounded-xl`} key= {fekw.vdr} >
      
      <div className="">
        <img className="w-[320px] h-[193px]" src={fekw.icon} alt="ish kupayib ketyapti" />
      </div>
        <h1 className="my-5 text-center ">{fekw.trh}</h1>
    </div>
  );
});

const Macser = () => {
  return (
      <div className="mt-10 md:mt-[150px] bg-[#E5E4ED] rounded-lg">
  <div className="flex flex-col md:flex-row justify-between font-bold py-4 md:py-[100px] container mx-auto">
    <h5 className="text-xl">Наши клиенты</h5>
    <h1 className="text-4xl">
      БОЛЕЕ <span className="text-lime-700">5000</span> <br />
      УСПЕШНЫХ ПРОЕКТОВ
    </h1>
  </div>
  <Marquee className="mt-4 md:mt-10 overflow-y-hidden pb-4 md:pb-[100px]">
    {myCompone}
  </Marquee>
</div>
  )
}

export default Macser



