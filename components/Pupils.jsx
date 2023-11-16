'use client'


import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import FilterOption from "./FilterOption";
import Link from "next/link";
import Image from "next/image";
import ITLOGO from "../public/Logo_IT_Park_Uzbekistan.svg.png"
const PupilsAddClient = () => {
    const [shaxs, setShaxs] = useState("");
    const [maktab, setMaktab] = useState("");
    const [sinf, setSinfi] = useState("");
    const [pupil, setPupil] = useState("");
    const [dars, setDars] = useState("");
    const [school, setSchool] = useState("");
    const [newSinfi, setNewSinfi] = useState("");
    const [newDarsQoldirish, setNewDarsQoldirish] = useState("");
    const [telephoneRaqami, setTelephoneRaqami] = useState("");
    const [newIsm, setNewIsm] = useState("");
    const [setShaxsi, setSetShaxsi] = useState("");
    const [MFY, setMFY] = useState("")
    const [manzili, setManzili] = useState("");
    const [telefoni, setTelefoni] = useState("");

    const router = useRouter();

    const maktablar = Array.from({ length: 54 }, (_, index) => index + 1);
    const kun = Array.from({ length: 3 }, (_, index) => index + 1);
    const soat = Array.from({ length: 6 }, (_, index) => index + 1);
    const sinflar = Array.from({ length: 11 }, (_, index) => index + 1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/topics`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    shaxs,
                    maktab,
                    sinf,
                    pupil,
                    dars,
                    school,
                    newSinfi,
                    newDarsQoldirish,
                    telephoneRaqami,
                    newIsm,
                    setShaxsi,
                    MFY,
                    manzili,
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/pupilsAdd");
                toast.success("O`quvchi malumotlari muvaffaqiyatli qo`shildi!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                // Update the topic count after successful form submission
                const response = await fetch("/api/topics");
                if (response.ok) {
                    const data = await response.json();
                    setTopicCount(data.length);
                } else {
                    console.log("Failed to fetch topic data.");
                }
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full flex flex-col h-[85vh] gap-3 main_form_add">
                <div className="text-end">
                    <Link className="green rounded-md py-3 px-10 text-white button" href={"/"}>Orqaga</Link>
                </div>
                <label className="text-[20px] poppins font-bold -mb-3" htmlFor="">
                    Maktabni tanlang
                </label>
                <select
                    onChange={(e) => setSchool(e.target.value)}
                    value={school}
                    className="px-2 py-3 border text-opacity-25 outline-none rounded-md cursor-pointer"
                >
                    <option>Bu yerdan tanlang</option>
                    {maktablar.map((maktab, index) => (
                        <option key={index} value={maktab}>
                            {maktab}-maktab
                        </option>
                    ))}
                </select>

                {school === "3" && (
                    <>
                        <label className="text-[20px] font-bold poppins -mb-3" htmlFor="">
                            Sinfni tanlang
                        </label>

                        <FilterOption
                            setShaxsiy={setNewSinfi}
                            setSetShaxs={setNewIsm}
                            setManzili={setManzili}
                            setTelefoni={setTelephoneRaqami}
                        />
                        {/* <label className="text-[18px] poppins font-bold" htmlFor="">
                            Telefon raqami
                        </label>
                        <input
                            className="w-full py-3 px-2 border outline-none"
                            onChange={(e) => setTelephoneRaqami(e.target.value)}
                            value={telephoneRaqami}
                            type="text"
                            placeholder="Telefon raqami"
                        /> */}
                        <label className="text-[20px] poppins font-bold -mb-3" htmlFor="">Sektorni tanlang</label>

                        {/* <input className="w-full py-3 px-2 border outline-none" onChange={(e) => setMFY(e.target.value)} value={MFY} type="text" placeholder="MFY kiriting" /> */}

                        <select className="px-2 py-3  border  text-opacity-25 outline-none rounded-md cursor-pointer" onChange={(e) => setMFY(e.target.value)} value={MFY}>
                            <option>Bu yerdan tanlang</option>
                            <option>1-sektor</option>
                            <option>2-sektor</option>
                            <option>3-sektor</option>
                            <option>4-sektor</option>
                            {/* <option>Birinchi mintaqa</option>
                            <option>Инамов Бахром Хабибжонович (OYQIRON MFY)</option>
                            <option>Бахриддинов Ўткир Хусниддинович (NAMANGAN MFY)</option>
                            <option>Дедабоев Баходир  (BAG`RIKENGLIK MFY)</option>
                            <option> Хасанов Изаттила Олимжон ўғли (CHIG`ATOY)</option>
                            <option>Машраббоев Адхамжон Илхомжон ўғли (BAYNALMINAL MFY)</option>
                            <option>Мамадиёров Охунжон Хошимжон ўғлиа  (BOG` MFY)</option>
                            <option>Солиев Улуғбек Хошимжон ўғли (O`RIKOZOR MFY)</option>
                            <option>Ғуломжонов Ғиёсиддин Ғофуржон ўғли  (KOMILLIK MFY)</option>
                            <option>Хасанов Отабок Миршокирович  (YANGIOBOD MFY)</option>

                            <option>Ikkinchi mintaqa</option>
                            <option>Азимов Мирзо-Бобур Мирзабахром ўғли (DAMARIQ MFY)</option>
                            <option>Қирғизов Анваржон Адилжанович (LASKIDON MFY)</option>
                            <option>Тўхтабоев Бобомурод Тошпўлот ўғли  (KESKANYOR MFY)</option>
                            <option>Юлдашев Элёр Ахмадуллаевич  (IFTIXOR MFY)</option>
                            <option>Усманов Наримов Вахидович (A.NAVOIY MFY)</option>
                            <option>Холмирзаев Исмоилбек Қаюможонович  (NAVBAHOR MFY)</option>
                            <option>Мирзаев Фарход Қаюмович (YUKSALISH MFY)</option>


                            <option>Uchinchi mintaqa</option>
                            <option>Абдуллаев Дилмурод Шухратжонович (DO`STLIK MFY)</option>
                            <option>Жўрабоев Тохир Рахимжон ўғли (O`ZBEKISTON)</option>
                            <option>Авазбеков Акрамжон Анварбек ўғли  (Z.DIYOR MFY)</option>
                            <option>Обидов Бекзод (BESHKAPA MFY)</option>
                            <option>Жўраев Рахматилло Сайдвалиевич (DILDOSH MFY)</option>
                            <option>Файзуллаев Иброхим Жунайдулло ўғли  (OROMGOH MFY)</option>
                            <option>Исломов Шерзод Зулфиқораович  (SOHIBKOR MFY)</option>
                            <option>Икрамов Азизбек Қахрамон ўғли (XAYRLI MFY)</option>

                            <option>tortinchi mintaqa</option>
                            <option>Абдуллаев Абдухалил Фахриддинович (OBOD-DIYOR MFY)</option>
                            <option>Жўрабоев Акмалжон Комилжонович (QORABOG`)</option>
                            <option>Абдулходиев Умиджон Турсунпўлот ўғли  (CHORSU MFY)</option>
                            <option>Хотамжонов Отабек Улуғбек ўғли (GULDIROV MFY)</option>
                            <option>Комилов Дилмурод Тоштонбекович (GULSHAN)</option>
                            <option>Махмудаов Акбарали Аълохон ўғли  (QORAMURT MFY)</option>
                            <option>Худойбердиев Бунёд Авазбекович (SAROY MFY)</option>
                            <option>Қосимов Достон Рустам ўғли  (SOY MFY)</option>

                            <option>Beshinchi mintaqa</option>
                            <option>Мамадалихўжаев Мирсаидхўжа (ARBAG`ISH)</option>
                            <option>Тўрабоев Фазлиддин Каюмович  (UZUN KO`CHA MFY)</option>
                            <option>Мамасолиев Мухриддин Омонжон ўғли  (TO`PQAYRAG`OCH)</option>
                            <option>Турғунов Жамшидбек Ахмадиллу ўғли (BOZORBOSHI MFY)</option>
                            <option>Жамалов Дониёр Сидиқжонович (DEHQONOBOD MFY)</option>
                            <option>Нажмиддинов Низомжон Фазлитдин ўғли  (ALIXON)</option>
                            <option>Нишонбоев Абдурахмон  (BODOMZOR MFY)</option>
                            <option>Рустамов Хуснидин Фахриддинович (SOZ-SOY MFY)</option>

                            <option>Oltinchi mintaqa</option>

                            <option>Бувамирзаев Мақсуджон Маърупжон ўғли (TORIQ MFY)</option>

                            <option>Иминжанов Ғайратжон Умаржон ўғли  (ORA-ARIQ MFY)</option>
                            <option>Абдуллаев Рустамжон Рахимжанович (XAZRATISHOX MFY)</option>
                            <option>Ғайбуллаев Хўдойберди Ёдгорали ўғли  (BALIQ KO`L MFY)</option>
                            <option>Қобулов Жохонгир Одилжонович (BESHTOL MFY)</option>
                            <option>Мамасодиқов Ботиржон Зокиржон ўғли  (BOG`ISTON MFY)</option>


                            <option>Yettinchi mintaqa</option>
                            <option>Сайфидинов Сардор Фозилдинович (TURKISTON MFY)</option>
                            <option>Холматов Муроджон Анваржон ўғли  (BOLON MFY)</option>
                            <option>Исмоилов Илхомжон Икромжонович (ISTIQLOL MFY)</option>
                            <option>Холматов Алишер Илхомжон ўғли  (MUSTAQILLIK MFY)</option>
                            <option>Камалов Дилшод Дилмурод ўғли (NURAFSHON MFY)</option>
                            <option>Акбаров Элдорбек Сайфиддинович (NAVRUZ MFY)</option>
                            <option>Рахимов Аъзамат Азамжон ўғли  (SARKOR MFY)</option>
                            <option>Нематжанов Қахрамон Исломжон ўғли  (TINCHLIK MFY)</option> */}
                        </select>
                        <label className="text-[20px] font-bold poppins -mb-3" htmlFor="">
                            Qoldirilgan dars vaqti
                        </label>
                        <select onChange={(e) => setNewDarsQoldirish(e.target.value)} value={newDarsQoldirish} className="px-2 py-3 border  text-opacity-25 outline-none rounded-md cursor-pointer">
                            <option>Bu yerdan tanlang</option>

                            {soat.map((watch, index) => (
                                <option key={index}>{watch}-soat</option>
                            ))}

                            <option>Kun bo`yicha</option>
                            <option>1-kun</option>
                            <option>Sababli</option>
                        </select>



                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="green cursor-pointer rounded-md font-bold text-white py-3 px-6 w-fit"
                            >
                                Qo`shish
                            </button>
                        </div>

                    </>
                )}

                {school !== "3" && (
                    <>
                        <label className="text-[18px] font-bold poppins" htmlFor="">
                            Sinfni tanlang
                        </label>
                        {/* <select className="px-2 py-3 cursor-pointer" name="" id="">
                            <option>Bu yerdan tanlang</option>
                            {sinflar.map((sinf, index) => (
                                <option key={index} value={sinf}>{sinf}-sinf</option>
                            ))}
                        </select>

                        <label className="text-[18px] font-bold poppins" htmlFor="">
                            Familiya, Ismi hamda Otasining ismi
                        </label> */}

                        <FilterOption
                            setShaxsiy={setNewSinfi}
                            setSetShaxs={setNewIsm}
                            setManzili={setManzili}
                            setTelefoni={setTelephoneRaqami}
                        />

                        <label className="text-[18px] poppins font-bold" htmlFor="">MFY tanlang</label>
                        <select className="px-2 py-3 cursor-no-drop" onChange={(e) => setMFY(e.target.value)} value={MFY}>
                            <option>Ma`lumot yo`q</option>

                            {/* <option>SARKOR MFY</option>
                            <option>BOG`ISHAMOL MFY</option>
                            <option>BESHKAPA MFY</option>
                            <option>ZIYOKOR MFY</option>
                            <option>CHORTOQ MFY</option>
                            <option>BO`LON MFY</option> */}
                        </select>
                        {/* <select className="px-2 py-3 cursor-no-drop" name="" id="">
                            <option value="">Malumot yo`q</option>
                        </select> */}
                        <label className="text-[18px] font-bold poppins" htmlFor="">
                            Qoldirilgan dars vaqti
                        </label>
                        <select onChange={(e) => setNewDarsQoldirish(e.target.value)} value={newDarsQoldirish} className="border  text-opacity-25 outline-none rounded-md px-2 py-3 cursor-no-drop">
                            <option>Malumot yo`q</option>
                        </select>

                        {/* <input className="w-full py-3 px-2 border outline-none" onChange={(e) => setMFY(e.target.value)} value={MFY} type="text" placeholder="MFY kiriting" /> */}




                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={school !== "3"} // Disable button when school is not equal to "3"
                                className="bg-white border-2 cursor-no-drop rounded-md font-bold text-gray-200 py-3 px-6 w-fit"
                            >
                                Qo`shish
                            </button>
                        </div>
                    </>
                )}

                <div className='flex gap-1 pb-5 justify-center items-center'>
                    <h1 className='text-center text-[16px] poppins'>Web Sayt Chortoq IT Park jamoasi tomonidan tuzildi</h1>
                    <Image src={ITLOGO} alt='Image' width={50} height={10} />
                </div>





            </form >
        </>
    );
};

export default PupilsAddClient;