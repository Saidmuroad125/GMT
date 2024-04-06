
const litso = [
  {
    srcp: 'https://global-mt.ru/upload/iblock/c6e/0pordpcsv1m0eejjpk0uie7ftwusdl2k.jpg',
    textvok: "Дерматологическое оборудование",
    key: 1,
    buk:"div1"
  },
  {
    srcp: 'https://global-mt.ru/upload/iblock/343/thhoixipw9z1qmr1d532z5xs0r698m68.jpg',
    textvok: "Ветеринарное оборудование",
    key: 2,
    buk:"div2"
  },
  {
    srcp: 'https://global-mt.ru/upload/iblock/8a0/7xi0t1s68lzie3zhvjh21zpe1d5f2yrs.jpg',
    textvok: "Дерматологическое оборудование",
    key: 3,
    buk:"div3"
  },
  {
    srcp: 'https://global-mt.ru/upload/iblock/994/up35t6hkl0i48yv6vzobk5q776fmkfo3.png',
    textvok: "Оборудование для анастезиологии",
    key: 4,
    buk:"div4"
  },
  {
    srcp: 'https://global-mt.ru/upload/iblock/f4f/x5ak53u35c2xyod0djun1lznt9ihcccs.jpg',
    textvok: "Оборудование для анастезиологии",
    key: 5,
    buk:"div5"
  },
  {
    srcp: 'https://global-mt.ru/upload/iblock/b39/0o4wfxmcinlhszb86sgnuymbxesi3w7g.jpg',
    textvok: "Мебель для медецинских целей",
    key: 6,
    buk:"div6"
  },
  {
    srcp: 'https://global-mt.ru/upload/iblock/a5a/y4a7xoykn1nr0619l5vyw91gdd7t8rcm.jpg',
    textvok: "Дерматологическое оборудование",
    key: 7,
    buk:"div7"
  },

]


const slides = litso.map((item, ) => {
  return (
   <div className={`mt-10 border flex bg-[#E5E2EE] w-[220px] h-[304px] sm:w-full sm:h-auto ${item.buk}`} key={item.srcp}>
  <div>
    <img className="w-full h-[220px] sm:h-auto" src={item.srcp} alt="ish kupayib ketyapti" />
    <h1 className="p-3 font-medium">{item.textvok}</h1>
  </div>
</div>
  );
});


const Prop = () => {
  return (
   <div className="container mx-auto mt-5 parent sm:mt-10">
  {slides}
</div>
  )
}

export default Prop

