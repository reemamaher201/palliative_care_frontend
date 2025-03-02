import React from "react";


const DrugInventory = () => {
    return (
        <div dir ="rtl" className="min-h-screen flex">
            {/* الشريط الجانبي */}
            <aside className="w-1/4 bg-cyan-700 text-white p-6">
                <h2 className="text-xl font-bold mb-6">لوحة التحكم الرئيسية</h2>
                <ul className="space-y-4">
                    <li className="hover:underline cursor-pointer">إدارة الحالات</li>
                    <li className="hover:underline cursor-pointer">إدارة مخزون الأدوية</li>
                    <li className="hover:underline cursor-pointer">إعدادات الحساب</li>
                </ul>
            </aside>
            {/* محتوى الصفحة */}
            <div className="flex flex-col flex-grow">
                {/* الشريط العلوي */}
                <header className="flex justify-between items-center mb-6 px-4 py-2 bg-white shadow-md">
                    {/* اسم الجمعية */}
                    <h1 className="text-xl font-bold">جمعية الصليب الأحمر الفلسطيني</h1>

                    {/* الأيقونات */}
                    <div className="flex items-center space-x-4 space-x-reverse">
                    {/* أيقونة تسجيل الخروج */}
                        <button className="text-blue-500 hover:text-blue-700">
                            <i className="fas fa-sign-out-alt text-xl"></i>
                        </button>
                        {/* أيقونة الإشعارات */}
                        <button className="relative text-blue-500 hover:text-blue-700">
                            <i className="fas fa-bell text-xl"></i>
                            <span
                                className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center"></span>
                        </button>
                        {/* أيقونة الرسائل */}
                        <button className="text-blue-500 hover:text-blue-700">
                            <i className="fas fa-comment-dots text-xl"></i>
                        </button>
                    </div>
                </header>
                {/* إدارة مخزون الأدوية */}
                <div  className="p-6">
                    <h2 className="text-xl font-bold text-cyan-700 mb-6">إدارة مخزون الأدوية</h2>

                    {/* شريط البحث */}
                    <div dir={"ltr"} className="flex items-center mb-6">
                        <div dir={"rtl"} className="relative w-1/3">
                            <input
                                type="text"
                                placeholder="بحث"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                            <span className="absolute top-2 left-3 text-gray-400">
        <i className="fas fa-search"></i>
</span>
                        </div>
                        <button className="ml-4 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                            <i className="fas fa-filter text-gray-600"></i>
                        </button>
                    </div>

                    {/* جدول الأدوية */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 text-right">اسم الدواء</th>
                                <th className="px-4 py-2 text-right">الكمية المتوفرة</th>
                                <th className="px-4 py-2 text-right">تاريخ انتهاء الصلاحية</th>
                                <th className="px-4 py-2 text-right">الحد الأدنى الناقص</th>
                                <th className="px-4 py-2 text-right">المخزن</th>
                                <th className="px-4 py-2 text-right">تعديل</th>
                                <th className="px-4 py-2 text-right">حذف</th>


                            </tr>
                            </thead>
                            <tbody>
                            {Array.from({length: 10}).map((_, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${
                                        index % 2 === 0 ? "bg-blue-100" : "bg-white"
                                    }`}
                                >
                                    <td className="px-4 py-2 text-center">Acamol</td>
                                    <td className="px-4 py-2 text-center">
                                        {index === 4 ? (
                                            <span className="text-red-500 font-bold">8000</span>
                                        ) : (
                                            "200000"
                                        )}
                                    </td>
                                    <td className="px-4 py-2 text-center">12/12/2026</td>

                                    <td className="px-4 py-2 text-center">
                                        {index === 4 ? (
                                            <span className="text-red-500 font-bold">1000</span>
                                        ) : (
                                            "1000"
                                        )}
                                    </td>
                                    <td className="px-4 py-2 text-center">مفترق السامر</td>
                                    <td className="px-4 py-2 text-center">
                                        <button className="text-cyan-500 hover:text-cyan-700">
                                            <i className="fas fa-edit text-xl"></i>
                                        </button>
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <button className="text-red-500 hover:text-red-700">
                                            <i className="fas fa-trash-alt text-xl"></i>
                                        </button>
                                    </td>


                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrugInventory;