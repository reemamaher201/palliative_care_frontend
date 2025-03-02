import React from "react";


const Sidebar = () => {
    return (
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
    );
};

export default Sidebar;