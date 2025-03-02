import React from "react";

const AddProvider = () => {
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
            </aside >     {/* المحتوى الرئيسي */}
            <main className="flex-1 p-6">
            {/* الشريط العلوي */}
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">أحمد محمد</h1>
                <div className="flex space-x-4 space-x-reverse">
                    <i className="fas fa-bell text-gray-500 text-lg cursor-pointer"></i>
                    <i className="fas fa-envelope text-gray-500 text-lg cursor-pointer"></i>
                </div>
            </header  >      {/* نموذج إضافة مزود جديد */}
            <section  >        <h3 className="text-lg font-bold text-cyan-700 mb-6">إضافة مزود جديد</h3>
    <form className="space-y-4">
        {/* اسم المزود */}
        <div>
            <input
                type="text"
                placeholder="اسم المزود"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
        </div>

        {/* اسم المستخدم */}
        <div>
            <input
                type="text"
                placeholder="اسم المستخدم"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
        </div>

        {/* كلمة المرور */}
        <div>
            <input
                type="password"
                placeholder="كلمة المرور"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
        </div>

        {/* البريد الإلكتروني */}
        <div>
            <input
                type="email"
                placeholder="البريد الإلكتروني للتواصل"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
        </div>

        {/* زر الإضافة */}
        <div>
            <button                type="submit"
                                   className="bg-cyan-700 text-white px-6 py-2 rounded-lg hover:bg-cyan-800 transition"
            >
                إضافة
            </button >           </div>
    </form>
</section  >    </main>
</div>
);
};

export default AddProvider;