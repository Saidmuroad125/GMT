import  { useState } from 'react';
import SearchComponent from '../komponettt/Search';
function Location()  {
     const [name, setName] = useState(localStorage.getItem('name') || '');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [question, setQuestion] = useState(localStorage.getItem('question') || '');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setName('');
    setPhone('');
    setEmail('');
    setQuestion('');
    localStorage.removeItem('name');
    localStorage.removeItem('phone');
    localStorage.removeItem('email');
    localStorage.removeItem('question');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    localStorage.setItem(name, value);
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'question':
        setQuestion(value);
        break;
      default:
        break;
    }
  };
    return (
        <div className="flex gap-2 mx-auto conatainer h-[612-x] my-20" >
          <SearchComponent/>
            <div className="w-[50%] container ml-[65px] mt">
                <div >
                    <iframe
                        className="container mx-auto rounded-2xl"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13577.337172381369!2d69.2049699412457!3d41.28337677537935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1711913035465!5m2!1sru!2s"
                        width={700}
                        height={612}
                        style={{ border: 1 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    
                </div>

            </div>
            <div className="w-[50%] p-5  rounded-2xl"
            >
                <h1 className='font-medium text-black mb-[25px] text-3xl'>Остались вопросы?</h1>
                <p>Задайте их по номеру телефона +7 (495) 000-00-00 <br /> или оставьте свои координаты и наш менеджер <br /> перезвонит вам через 10 минут
                </p>
                <div className="p-4">
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Ваше имя</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Ваше имя"
        value={name}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div>
      <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">Ваш телефон</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Ваш телефон"
        value={phone}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div>
      <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Ваш email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Ваш email"
        value={email}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div>
      <label htmlFor="question" className="block mb-1 font-medium text-gray-700">Ваш вопрос</label>
      <input
        type="text"
        id="question"
        name="question"
        placeholder="Ваш вопрос"
        value={question}
        onChange={handleInputChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    <div>
      <input
        type="submit"
        value="Отправить"
        className="px-4 py-2 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
      />
    </div>
  </form>
              </div>
           </div>
        </div>
    )
}

export default Location
