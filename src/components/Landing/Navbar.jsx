import React from "react";

const Navbar = () => {
    return (
        <nav dir="rtl" className="bg-cyan-700 text-white py-4 px-8 rounded-lg">
            <div className="container mx-auto flex justify-between items-center">
                <img
                    src="src/assets/logo.png" // استبدل هذا الرابط برابط الصورة الفعلي
                    alt="logo"
                    className="rounded-lg w-15 h-15" // Adjust the size here
                />
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">الصفحة الرئيسية</a></li>
                    <li><a href="#" className="hover:underline">مزايا التسجيل</a></li>
                    <li><a href="#" className="hover:underline">الخدمات</a></li>
                    <li><a href="#" className="hover:underline">نصائح ومدونات</a></li>
                </ul>
                <button className="bg-white text-cyan-600 px-4 py-2 rounded">تسجيل حساب</button>
            </div>
        </nav>
    );
};

export default Navbar;