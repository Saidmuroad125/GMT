import React, { useState } from "react";
import { FiUser } from "react-icons/fi";

export default function Modal() {

  const [showModal, setShowModal] = React.useState(false);
    const [name, setName] = useState(localStorage.getItem('name') || '');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [question, setQuestion] = useState(localStorage.getItem('question') || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ma'lumotlarni yuborish uchun backendga so'rovni yuborish logikasi
    // ...

    // Ma'lumotlarni tozalash va localStorage ga saqlash
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
    // Ma'lumotlarni saqlash
    localStorage.setItem(name, value);
    // Input qiymatlarini yangilash
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
   <div className="sm:flex">
  <button className="w-full sm:w-auto flex flex-col items-center text-sm text-center uppercase transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none hover:text-[#088269]" type="button" onClick={() => setShowModal(true)}>
    <FiUser className="w-5 h-5" />
    Войти
  </button>
  {showModal ? (
    <>
     <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
  <div className="relative max-w-3xl mx-auto my-6 sm:max-w-2xl w-full sm:w-[500px]">
    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
      <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
        <h1>Sign Up</h1>
        <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none" onClick={() => setShowModal(false)}>
          <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">×</span>
        </button>
      </div>
      <div className="p-3 sm:flex">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="sm:flex sm:justify-between">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Ваше имя</label>
              <input type="text" id="name" name="name" placeholder="Ваше имя" value={name} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">Ваш телефон</label>
              <input type="tel" id="phone" name="phone" placeholder="Ваш телефон" value={phone} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Ваш email</label>
            <input type="email" id="email" name="email" placeholder="Ваш email" value={email} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="question" className="block mb-1 font-medium text-gray-700">Ваш вопрос</label>
            <input type="text" id="question" name="question" placeholder="Ваш вопрос" value={question} onChange={handleInputChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
        <button className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none" type="button" onClick={() => setShowModal(false)}>
          Close
        </button>
        <button className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none" type="submit" value="Отправить" onClick={() => setShowModal(false)}>
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>
      
    </>
  ) : null}
</div>
  );
}