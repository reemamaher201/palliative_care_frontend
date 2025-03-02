import React from "react";
import Header from "./comp/Header.jsx";
import Sidebar from "./comp/Sidebar.jsx";

const AddMedicine = () => {
    return (
        <div dir="rtl" className="flex min-h-screen bg-gray-100">
            {/* الشريط الجانبي */}
           <Sidebar/>
            {/* المحتوى الرئيسي */}
            <main className="flex flex-col flex-grow ">
                {/* الشريط العلوي */}
                <div className="font-sans">
                    <Header/>
                </div>
                {/* نموذج إضافة دواء جديد */}
                <section>
                <h3 className="text-lg font-bold text-cyan-700 m-6 ">إضافة دواء جديد</h3>
                    <form className="space-y-4 px-8">
                        {/* اسم الدواء */}
                        <div>
                            <input
                                type="text"
                                placeholder="اسم الدواء"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        {/* موصوف لمرضى */}
                        <div>
                            <input
                                type="text"
                                placeholder="موصوف لمرضى"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        {/* الكمية الموزعة */}
                        <div>
                            <input
                                type="number"
                                placeholder="الكمية الموزعة"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        {/* الكمية المطلوبة */}
                        <div>
                            <input
                                type="number"
                                placeholder="الكمية المطلوبة"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        {/* أماكن التواجد */}
                        <div>
                            <textarea
                                placeholder="أماكن التواجد"
                                rows="3"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            ></textarea>
                        </div>
                        {/* تاريخ التوزيع القادم */}
                        <div>
                            <label className="flex justify-start">التوزيع القادم</label>
                            <input
                                type="date"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        {/* زر الإضافة */}
                        <div>
                            <button
                                type="submit"
                                className="bg-cyan-700 text-white px-6 py-2 rounded-lg hover:bg-cyan-800 transition"
                            >
                                إضافة
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default AddMedicine;