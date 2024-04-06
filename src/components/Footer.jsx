import logo from "../assets/Logo.svg"
import Fulltv from "../assets/full-tv.svg"
import viza from "../assets/viza.svg"

const Footer = () => {
    return (
        <footer className="w-full bg-[#088269] py-10 px-16">
            <div className="flex flex-col justify-between mb-5 md:flex-row">
                <div className="flex flex-col gap-5">
                    <h5 className="text-[14px] text-white border-b-2 border-white pb-4 hover:text-red-300">Покупателям</h5>
                    <div className="flex items-start justify-start gap-10">
                        <ul>
                            <li className="text-white text-[14px] hover:text-red-300">O компании</li>
                            <li className="text-white text-[14px] hover:text-red-300">Сертификаты</li>
                            <li className="text-white text-[14px] hover:text-red-300">Вакансии</li>
                            <li className="text-white text-[14px] hover:text-red-300">Гарантии</li>
                            <li className="text-white text-[14px] hover:text-red-300">Услуги</li>
                            <li className="text-white text-[14px] hover:text-red-300">Акции</li>
                            <li className="text-white text-[14px] hover:text-red-300">Доставка</li>
                        </ul>
                        <ul>
                            <li className="text-white text-[14px] hover:text-red-300">Оплата</li>
                            <li className="text-white text-[14px] hover:text-red-300">Возврат</li>
                            <li className="text-white text-[14px] hover:text-red-300">FAQ</li>
                            <li className="text-white text-[14px] hover:text-red-300">Лизинг</li>
                            <li className="text-white text-[14px] hover:text-red-300">Отзывы</li>
                            <li className="text-white text-[14px] hover:text-red-300">Блог</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h5 className="text-[14px] text-white border-b-2 border-white pb-4 hover:text-red-400">Каталог</h5>
                    <div className="flex items-start justify-start gap-10">
                        <ul>
                            <li className="text-white text-[14px] hover:text-red-300">Реанимация</li>
                            <li className="text-white text-[14px] hover:text-red-300">Хирургия</li>
                            <li className="text-white text-[14px] hover:text-red-300">Офтальмология</li>
                            <li className="text-white text-[14px] hover:text-red-300">Лабораторная диагностика</li>
                            <li className="text-white text-[14px] hover:text-red-300">Акушерство и Гинекология</li>
                            <li className="text-white text-[14px] hover:text-red-300">Гистология</li>
                            <li className="text-white text-[14px] hover:text-red-300">Косметология</li>
                        </ul>
                        <ul>
                            <li className="text-white text-[14px] hover:text-red-300">Орториноларингология</li>
                            <li className="text-white text-[14px] hover:text-red-300">Рентгенология и томография</li>
                            <li className="text-white text-[14px] hover:text-red-300">Стрерилизация</li>
                            <li className="text-white text-[14px] hover:text-red-300">Физиотерапия и реабилитация</li>
                            <li className="text-white text-[14px] hover:text-red-300">Функциональная диагностика</li>
                            <li className="text-white text-[14px] hover:text-red-300">Эндоскопия</li>
                        </ul>
                        <ul>
                            <li className="text-white text-[14px] hover:text-red-300">Новинки</li>
                            <li className="text-white text-[14px] hover:text-red-300">Распродажи</li>
                            <li className="text-white text-[14px] hover:text-red-300">Кабинеты под ключ</li>
                            <li className="text-white text-[14px] hover:text-red-300">Скачать каталог</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h5 className="text-[14px] text-white border-b-2 border-white pb-4 hover:text-red-400">Контакты</h5>
                    <div className="flex items-start justify-start gap-10">
                        <ul>


                            <li className="text-white text-[14px] hover:text-red-300">Адрес:</li>
                            <li className="text-white text-[14px] hover:text-red-300">г. Москва, ул. Московская, д. 35 </li>
                            <li className="text-white text-[14px] hover:text-red-300">Карта проезда</li>
                            <li className="text-white text-[14px] hover:text-red-300">График работы:
                                <br />
                                Пн-Пт c 09:00-19:00,
                                <br />
                                Cб-Bc - выходной
                            </li>
                            <li className="text-white text-[14px] hover:text-red-300">+7 000-000-00-00</li>
                            <li className="text-white text-[14px] hover:text-red-300">+7 495-000-00-00</li>
                            <li className="text-white text-[14px] hover:text-red-300">8 800-000-00-00</li>
                            <li className="text-white text-[14px] hover:text-red-300">info@mail.ru</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-between border-t-2 border-white">
                <div className="flex flex-col items-start gap-3 px-2 py-3 justify-centr">
                    <img  src={logo} alt="footer-logo" />
                    <h5 className="text-[12px] text-white hover:text-red-400">OOO «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</h5>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 px-2 py-3">
                    <h5 className="text-[14px] text-white hover:text-red-400">Мы в соцсетях</h5>
                    <img src={Fulltv} alt="footer-logos" />
                </div>
                <div className="flex items-center justify-center gap-10 px-2 py-3">
                    <div className="flex items-start justify-start gap-10">
                        <ul>
                            <li className="text-white text-[14px] hover:text-red-300">Партнерская программа</li>
                            <li className="text-white text-[14px] hover:text-red-300">Оптовые продажи</li>
                            <li className="text-white text-[14px] hover:text-red-300">Реквизиты</li>
                        </ul>
                    </div>
                    <div className="flex items-start justify-start gap-10">
                        <ul>
                            <li className="text-white text-[14px] hover:text-red-300">Партнерская программа</li>
                            <li className="text-white text-[14px] hover:text-red-300">Оптовые продажи</li>
                            <li className="text-white text-[14px] hover:text-red-300">Реквизиты</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-3 px-2 py-3">
                    <h5 className="text-[14px] text-white hover:text-red-300">Способы оплаты</h5>
                    <div className="flex gap-3">
                        <img src={viza} alt="carta" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer