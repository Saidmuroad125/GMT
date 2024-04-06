import Slider from "react-slick";
import Boss from "./BossC";

function Monstr() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
   <div className="container gap-5 mt-10 bg-[#F8F7F3]">
  <Slider className="gap-5 bg-[#F8F7F3] w-[80%] container mx-auto" {...settings}>
    {Boss}
    {Boss}
    {Boss}
  </Slider>
  <div className="mt-10">
    <div className="flex flex-col justify-end gap-3 mb-5 md:flex-row">
      <button className="border rounded-full w-full md:w-[178px] h-[41px] hover:bg-[#088269] hover:text-white text-xs">
        Бесплатная консультация
      </button>
      <button className="border rounded-full w-full md:w-[168px] h-[41px] hover:bg-[#088269] hover:text-white">
        Рассчитать стоимость
      </button>
    </div>
  </div>
</div>
  );
}

export default Monstr;
