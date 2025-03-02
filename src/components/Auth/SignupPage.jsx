import React from "react";
import Navbar from "../Landing/Navbar.jsx";

const SignupPage = () => {
    return (
        <div dir="rtl" className="bg-gray-100 font-sans min-h-screen">
            {/* شريط التنقل */}
            <div className="font-sans">
                <Navbar />
            </div>


            {/* نموذج إنشاء الحساب */}
            <div className="container mx-auto mt-10">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-cyan-700 text-center mb-6">
                        إنشاء حساب
                    </h2>
                    <form>
                        <div className="grid grid-cols-2 gap-4">
                            {/* الاسم الكامل */}
                            <div>

                                <input
                                    type="text"
                                    placeholder="الاسم الكامل"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            {/* البريد الإلكتروني */}
                            <div>

                                <input
                                    type="email"
                                    placeholder="البريد الإلكتروني"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            {/* رقم الهاتف */}
                            <div>

                                <input
                                    type="text"
                                    placeholder="رقم الهاتف"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            {/* رقم الهوية */}
                            <div>

                                <input
                                    type="text"
                                    placeholder="رقم الهوية"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            {/* العنوان الكامل */}
                            <div>

                                <input
                                    type="text"
                                    placeholder="العنوان الكامل (مدينة/حي/شارع)"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            {/* تاريخ الميلاد */}
                            <div>

                                <input
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            {/* نوع الرعاية */}
                            <div>

                                <input
                                    type="text"
                                    placeholder="نوع الرعاية"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            {/* الجنس */}
                            <div className="flex items-center space-x-6 space-x-reverse">
                                {/* كلمة الجنس */}
                                <label className="text-gray-700">الجنس</label>  {/* خيار ذكر */}
                                <label className="flex items-center space-x-2 space-x-reverse">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="ذكر"
                                    className="form-radio h-5 w-5 text-cyan-500 border-gray-300 focus:ring-cyan-500"
                                />
                                <span className="text-gray-700">ذكر</span>
                            </label>  {/* خيار أنثى */}
                            <label className="flex items-center space-x-2 space-x-reverse">
                            <input
                                type="radio"
                                name="gender"
                                value="أنثى"
                                className="form-radio h-5 w-5 text-cyan-500 border-gray-300 focus:ring-cyan-500"
                            />
                            <span className="text-gray-700">أنثى</span>
                        </label></div>


                        </div>

                        {/* زر تسجيل الحساب */}
                        <div className="mt-6 text-center">
                            <button
                                type="submit"
                                className="bg-cyan-700 text-white px-6 py-2 rounded-lg hover:bg-cyan-800 transition duration-300"
                            >
                                تسجيل الحساب
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;