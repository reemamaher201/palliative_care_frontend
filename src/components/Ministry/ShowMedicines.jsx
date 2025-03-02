import React from "react";

const ShowMedicines = () => {
    return (
        <div dir={"rtl"} className="flex min-h-screen bg-gray-100">
            {/* الشريط الجانبي */}
            <aside className="w-1/4 bg-cyan-700 text-white p-6">
                <h2 className="text-xl font-bold mb-6">لوحة التحكم الرئيسية</h2>
                <ul className="space-y-4">
                    <li className="hover:underline cursor-pointer">المرضى</li>
                    <li className="hover:underline cursor-pointer">الأدوية</li>
                    <li className="hover:underline cursor-pointer">إحصائيات</li>
                    <li className="hover:underline cursor-pointer">مزود الخدمة</li>
                    <li className="hover:underline cursor-pointer">الإشعارات</li>
                </ul>
            </aside>

            {/* المحتوى الرئيسي */}
            <main className="flex-1 p-6">
                {/* الشريط العلوي */}
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-bold">أحمد محمد</h1>
                    <div className="flex space-x-4">
                        <i className="fas fa-bell text-gray-500 text-lg cursor-pointer"></i>
                        <i className="fas fa-envelope text-gray-500 text-lg cursor-pointer"></i>
                    </div>
                </header>

                {/* شريط البحث وزر إضافة دواء */}
                <div className="flex justify-between items-center mb-6">
                    <div className="relative w-1/3">
                        <input
                            type="text"
                            placeholder="بحث"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <span className="absolute top-2 right-3 text-gray-400">
              <i className="fas fa-search"></i>
            </span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                        إضافة دواء جديد
                    </button>
                </div>

                {/* جدول الأدوية */}
                <section>
                    <h3 className="text-lg font-bold text-gray-700 mb-4">الأدوية</h3>
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
                        <thead>
                        <tr className="bg-cyan-500 text-white">
                            <th className="px-4 py-2 text-right">الدواء</th>
                            <th className="px-4 py-2 text-right">موصوف لمرضى</th>
                            <th className="px-4 py-2 text-right">الكمية الموزعة</th>
                            <th className="px-4 py-2 text-right">الكمية المطلوبة</th>
                            <th className="px-4 py-2 text-right">أماكن التواجد</th>
                            <th className="px-4 py-2 text-right">التوزيع القادم</th>
                            <th className="px-4 py-2 text-right">تعديل</th>
                            <th className="px-4 py-2 text-right">حذف</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <tr
                                key={index}
                                className={`border-b transition-colors duration-200 ${
                                    index % 2 === 0
                                        ? "bg-gray-100 hover:bg-gray-200"
                                        : "bg-white hover:bg-gray-100"
                                }`}
                            >
                                <td className="px-4 py-2 text-right">Vitamin B12</td>
                                <td className="px-4 py-2 text-right">
                                    مرضى سوء التغذية والمراضعات
                                </td>
                                <td className="px-4 py-2 text-right">100000</td>
                                <td className="px-4 py-2 text-right">600000</td>
                                <td className="px-4 py-2 text-right">
                                    - دير البلح
                                    <br /> - أونيس
                                    <br /> - عتقة
                                    <br /> - غزة
                                </td>
                                <td className="px-4 py-2 text-right">12/12/2024</td>
                                <td className="px-4 py-2 text-right">
                                    <i className="fas fa-edit text-cyan-700 cursor-pointer hover:text-cyan-900 transition-colors duration-200"></i>
                                </td>
                                <td className="px-4 py-2 text-right">
                                    <i className="fas fa-trash text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200"></i>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default ShowMedicines;