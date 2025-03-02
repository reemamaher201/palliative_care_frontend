import React from "react";

const ShowProvider = () => {
    return (
        <div dir={"rtl"} className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
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

            {/* Main content */}
            <main className="flex-1 p-6">
                {/* Header */}
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-bold">أحمد محمد</h1>
                    <div className="flex space-x-4">
                        <i className="fas fa-bell text-gray-500 text-lg cursor-pointer"></i>
                        <i className="fas fa-envelope text-gray-500 text-lg cursor-pointer"></i>
                    </div>
                </header>

                {/* Search bar and add button */}
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
                        إضافة مزود جديد
                    </button>
                </div>

                {/* Providers table */}
                <section>
                    <h3 className="text-lg font-bold text-gray-700 mb-4">قائمة المزودين</h3>
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 text-right">اسم المزود</th>
                            <th className="px-4 py-2 text-right">اسم المستخدم</th>
                            <th className="px-4 py-2 text-right">كلمة المرور</th>
                            <th className="px-4 py-2 text-right">البريد الإلكتروني للتواصل</th>
                            <th className="px-4 py-2 text-right">تعديل</th>
                            <th className="px-4 py-2 text-right">حذف</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2 text-right">الهلال الأحمر</td>
                                <td className="px-4 py-2 text-right">224484</td>
                                <td className="px-4 py-2 text-right">12345678*</td>
                                <td className="px-4 py-2 text-right">name@example.com</td>
                                <td className="px-4 py-2 text-right">
                                    <i className="fas fa-edit text-cyan-700 cursor-pointer"></i>
                                </td>
                                <td className="px-4 py-2 text-right">
                                    <i className="fas fa-trash text-red-500 cursor-pointer"></i>
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

export default ShowProvider;