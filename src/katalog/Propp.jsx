
const litso = [
  {
    srcpp: 'https://global-mt.ru/upload/iblock/c6e/0pordpcsv1m0eejjpk0uie7ftwusdl2k.jpg',
    textvokp: "Дерматологическое оборудование",
    keyp: 1,
    bukp:"div1p"
  },
  {
    srcpp: 'https://global-mt.ru/upload/iblock/343/thhoixipw9z1qmr1d532z5xs0r698m68.jpg',
    textvokp: "Ветеринарное оборудование",
    keyp: 2,
    bukp:"div2p"
  },
  {
    srcpp: 'https://global-mt.ru/upload/iblock/8a0/7xi0t1s68lzie3zhvjh21zpe1d5f2yrs.jpg',
    textvokp: "Дерматологическое оборудование",
    keyp: 3,
    bukp:"div3p"
  },
  {
    srcpp: 'https://global-mt.ru/upload/iblock/994/up35t6hkl0i48yv6vzobk5q776fmkfo3.png',
    textvokp: "Оборудование для анастезиологии",
    keyp: 4,
    bukp:"div4p"
  },
  {
    srcpp: 'https://global-mt.ru/upload/iblock/f4f/x5ak53u35c2xyod0djun1lznt9ihcccs.jpg',
    textvokp: "Оборудование для анастезиологии",
    keyp: 5,
    bukp:"div5p"
  },
  {
    srcpp: 'https://global-mt.ru/upload/iblock/b39/0o4wfxmcinlhszb86sgnuymbxesi3w7g.jpg',
    textvokp: "Мебель для медецинских целей",
    keyp: 6,
    bukp:"div6p"
  },
  {
    srcpp: 'https://global-mt.ru/upload/iblock/7bc/e44j94wh3bwr8kelfn8i5l4uga0l9ja8.jpg',
    textvokp: "Дерматологическое оборудование",
    keyp: 7,
    bukp:"div7p"
  },
  {
    srcpp: 'https://global-mt.ru/upload/iblock/5de/nu8jw8snpoajoh9lvn8lzj77x4y8plci.jpg',
    textvokp: "Дерматологическое оборудование",
    keyp: 8,
    bukp:"div8p"
  },
  {
    srcpp: 'https://global-mt.ru/upload/iblock/4bb/jsyw4ljffh1n52vdz40t697wmzppi2zu.jpg',
    textvokp: "Дерматологическое оборудование",
    keyp: 9,
    bukp:"div9p"
  },
  {
    srcpp: 'https://global-mt.ru/upload/iblock/494/53etmyp7htuaqvlggjf0xu2aogn5iwn3.jpg',
    textvokp: "Дерматологическое оборудование",
    keyp: 10,
    bukp:"div10p"
  },

]


const slidesp = litso.map((item, ) => {
  return (
   <div className={`border bg-[#E5E2EE] w-[300px] h-[304px] sm:w-full sm:h-auto ${item.bukp}`} key={item.keyp}>
  <div>
    <img className="w-full h-[220px] sm:h-auto" src={item.srcpp} alt="ish kupayib ketyapti" />
    <h1 className="p-3 font-medium">{item.textvokp}</h1>
  </div>
</div>
  );
});


const Propp = () => {
  return (
   <div className="container mx-auto parentp sm:px-4">
  {slidesp}
</div>
  )
}

export default Propp

