import React from "react";

const Dashboard = () => {
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
</header  >      {/* الإحصائيات */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-gray-700 font-bold mb-4">عدد المرضى المسجلين</h3>
    <p className="text-3xl font-bold text-cyan-700">350,000</p>
         </div>
 <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-gray-700 font-bold mb-4">نسبة المرضى لكل قسم</h3>
           <div className="w-32 h-32 mx-auto">
            {/* يمكنك استبدال هذا العنصر بمخطط دائري باستخدام مكتبة مثل Chart.js */}
            <div className="w-full h-full rounded-full border-4 border-cyan-700"></div>
 </div>
 </div>
 </section  >      {/* جدول الأدوية المتوفرة */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-700 mb-4">الأدوية المتوفرة حاليا</h3>
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
 <tr className="bg-gray-200">
            <th className="px-4 py-2 text-right">الدواء</th>
               <th className="px-4 py-2 text-right">الكمية</th>
            <th className="px-4 py-2 text-right">المناطق المتوفرة</th>
               <th className="px-4 py-2 text-right">تعديل</th>
            <th className="px-4 py-2 text-right">حذف</th>
             </tr>
           </thead   >         <tbody>
 <tr className="border-b">
                <td className="px-4 py-2 text-right">Trufen</td>
               <td className="px-4 py-2 text-right">10,000</td>
                <td className="px-4 py-2 text-right">النصر</td>
               <td className="px-4 py-2 text-right">
                    <i className="fas fa-edit text-cyan-700 cursor-pointer"></i>
               </td>
               <td className="px-4 py-2 text-right">
                        <i className="fas fa-trash text-red-500 cursor-pointer"></i>
               </td>
             </tr>
             <tr className="border-b">
                            <td className="px-4 py-2 text-right">Acamol</td>
               <td className="px-4 py-2 text-right">7,000</td>
                            <td className="px-4 py-2 text-right">مجمع الشفاء</td>
               <td className="px-4 py-2 text-right">
                                <i className="fas fa-edit text-cyan-700 cursor-pointer"></i>
               </td>
               <td className="px-4 py-2 text-right">
                                    <i className="fas fa-trash text-red-500 cursor-pointer"></i>
               </td>
             </tr>
             <tr>
               <td className="px-4 py-2 text-right">Ensolin</td>
                            <td className="px-4 py-2 text-right">3,000</td>
               <td className="px-4 py-2 text-right">الأمل العربي</td>
                            <td className="px-4 py-2 text-right">
                  <i className="fas fa-edit text-cyan-700 cursor-pointer"></i>
                </td>
                <td className="px-4 py-2 text-right">
                  <i className="fas fa-trash text-red-500 cursor-pointer"></i>
            </td>
        </tr>
    </tbody>          </table>        </section >       {/* جدول الحالات الطارئة */}
<section >         <h3 className="text-lg font-bold text-gray-700 mb-4">الحالات الطارئة</h3>
    <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
 <tr className="bg-gray-200">
        <th className="px-4 py-2 text-right">المريض</th>
               <th className="px-4 py-2 text-right">المرض</th>
        <th className="px-4 py-2 text-right">نوع الحالة</th>
               <th className="px-4 py-2 text-right">حالة الطلب</th>
        <th className="px-4 py-2 text-right">منطقة السكن</th>
               <th className="px-4 py-2 text-right">حذف</th>
    </tr>
</thead  >          <tbody>
    <tr className="border-b">
                <td className="px-4 py-2 text-right">أحمد</td>
    <td className="px-4 py-2 text-right">سرطان المعدة</td>
               <td className="px-4 py-2 text-right">سفر للعلاج</td>
    <td className="px-4 py-2 text-right">قيد المراجعة</td>
               <td className="px-4 py-2 text-right">النصر</td>
    <td className="px-4 py-2 text-right">
                  <i className="fas fa-trash text-red-500 cursor-pointer"></i></td>
    </tr>
    <tr className="border-b">
                <td className="px-4 py-2 text-right">محمد</td>
    <td className="px-4 py-2 text-right">فتاق داخلي</td>
               <td className="px-4 py-2 text-right">عملية جراحية</td>
    <td className="px-4 py-2 text-right">قيد المراجعة</td>
               <td className="px-4 py-2 text-right">الشجاعية</td>
    <td className="px-4 py-2 text-right">
                  <i className="fas fa-trash text-red-500 cursor-pointer"></i>
    </td>
    </tr>
    <tr>
        <td className="px-4 py-2 text-right">إسماعيل</td>
               <td className="px-4 py-2 text-right">شلل نصفي</td>
        <td className="px-4 py-2 text-right">توفر كرسي متحرك</td>
               <td className="px-4 py-2 text-right">قيد المراجعة</td>
        <td className="px-4 py-2 text-right">تل الهوا</td>
               <td className="px-4 py-2 text-right">
            <i className="fas fa-trash text-red-500 cursor-pointer"></i>
               </td>
             </tr>
           </tbody >         </table >       </section  >    </main>
 </div>
 );
};

export default Dashboard;