import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
    // بيانات الرسم البياني الدائري
    const pieData = {
        labels: ["الحالات النشطة", "إجمالي المستفيدين"],
        datasets: [
            {
                data: [80000, 500000],
                backgroundColor: ["#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
            },
        ],
    };

    // بيانات الرسم البياني العمودي
    const barData = {
        labels: ["شمال غزة", "غرب وشرق غزة", "الوسطى", "رفح", "خانيونس"],
        datasets: [
            {
                label: "إسعافات",
                data: [20, 40, 60, 80, 50],
                backgroundColor: "#FF6384",
            },
            {
                label: "غذائية",
                data: [30, 50, 70, 90, 60],
                backgroundColor: "#36A2EB",
            },
            {
                label: "طبية",
                data: [40, 60, 80, 100, 70],
                backgroundColor: "#FFCE56",
            },
        ],
    };

    return (
        <div dir="rtl" className="flex min-h-screen bg-gray-100">
            {/* الشريط الجانبي */}
            <aside className="w-1/4 bg-cyan-700 text-white p-6">
                <h2 className="text-xl font-bold mb-6">لوحة التحكم الرئيسية</h2>
                <ul className="space-y-4">
                    <li className="hover:underline cursor-pointer">إدارة الحالات</li>
                    <li className="hover:underline cursor-pointer">إدارة مخزون الأدوية</li>
                    <li className="hover:underline cursor-pointer">إعدادات الحساب</li>
                </ul>
            </aside>

            {/* المحتوى الرئيسي */}
            <main className="flex-1 p-6">
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

                {/* الإحصائيات */}
                <section>
                    {/* البطاقات العلوية */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <p className="text-gray-500">معدل الاستجابة</p>
                            <p className="text-cyan-700 font-bold text-xl">18 ساعة/اليوم</p>
                            <p className="text-gray-400 text-sm">الوقت اللازم للاستجابة لكل مريض</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <p className="text-gray-500">الحالات النشطة</p>
                            <p className="text-cyan-700 font-bold text-xl">80000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <p className="text-gray-500">إجمالي المستفيدين</p>
                            <p className="text-cyan-700 font-bold text-xl">500000</p>
                        </div>
                    </div>

                    {/* الرسم البياني الدائري */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                        <Pie
                            data={pieData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                            width={400}
                            height={400}
                        />
                    </div>

                    {/* الرسم البياني العمودي */}
                    <h3 className="text-lg font-bold text-cyan-700 mb-6">توزيع الحالات (الطبية، الغذائية، الإسعافات)</h3>
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                        <Bar data={barData} />
                    </div>

                    {/* البطاقات السفلية */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <p className="text-gray-500">الحالات الجديدة هذا الأسبوع</p>
                            <p className="text-cyan-700 font-bold text-xl">2000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                            <p className="text-gray-500">الحالات الجديدة هذا الشهر</p>
                            <p className="text-cyan-700 font-bold text-xl">10000</p>
                        </div>
                    </div>
                </section>

                {/* التنبيهات والإشعارات */}
                <section>
                    <h3 className="text-lg font-bold text-cyan-700 mb-6">تنبيهات وإشعارات</h3>
                    <div className="space-y-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg shadow-lg ${
                                    index % 2 === 0 ? "bg-red-100" : "bg-blue-100"
                                }`}
                            >
                                <p className="text-gray-700">
                                    {index % 2 === 0
                                        ? "لم يتبقى سوى 10000 كرونة من دواء توفين."
                                        : "تعليمات جديدة: من الوزارة عدم مشاركة معلومات الحساب مع أي جهة."}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;