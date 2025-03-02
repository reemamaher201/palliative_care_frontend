import React from "react";
import PNavbar from "./PNavbar.jsx";

const UserProfile = () => {
    return (
        <div className="bg-white max-h-screen">
            {/* شريط التنقل */}
            <div className="font-sans">
                <PNavbar />
            </div>


            {/* محتوى الصفحة */}
            <div className="flex justify-center items-start p-8 ">

                    {/* معلومات السكن */}
                    <div dir ="rtl" className="flex-1 mr-8">
            <div
                className="text-white text-lg font-bold py-2 m-4 px-6 rounded-lg relative"
              style={{ backgroundColor: "#519DB7" }}
                    >
                    أهلاً، أحمد محمد محمود
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-right mb-2">
                        منطقة السكن
                    </label  >            <input
                    type="text"
                    placeholder="النصر/ستار سنس مول"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-right mb-2">
                        أقرب مزود
                    </label   >           <input
                    type="text"
                    placeholder="الرعاية الطبية"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                {/* زر تعديل بيانات */}
                <div className="flex justify-start mt-4">
                    <button                className="text-white px-4 py-2 mt-20 mx-auto rounded-lg hover:bg-teal-600 transition"
                                           style={{ backgroundColor: "#519DB7" }}
                    >
                        تعديل بيانات
                    </button >           </div>
            </div>

            {/* معلومات الشخصية */}
            <div dir ="rtl" className="flex-1 m-8">
            <h3
             className="text-lg font-bold text-right mb-4"
              style={{ color: "#519DB7" }}
            >
            معلوماتي الشخصية
        </h3>
    <div className="mb-4">
        <label className="block text-gray-700 text-right mb-2">الاسم</label>              <input
        type="text"
        value="أحمد محمد محمود"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        readOnly
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-right mb-2">
            رقم الهوية
        </label >             <input
        type="text"
        value="924310875"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        readOnly
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-right mb-2">العمر</label>              <input
        type="text"
        value="40 سنة"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        readOnly
        />
    </div>
    {/* الجنس */}
    <div className="mb-4 flex items-center space-x-6 space-x-reverse">
        <label className="text-gray-700">الجنس</label>              <label className="flex items-center space-x-2 space-x-reverse">
        <input
            type="radio"
            name="gender"
            value="ذكر"
            className="form-radio h-5 w-5 text-cyan-500 border-gray-300 focus:ring-cyan-500"
            checked
            readOnly
        />
        <span className="text-gray-700">ذكر</span>
    </label  >          </div>
</div>

</div>

{/* جدول الحالة الصحية */}
<div dir = "rtl" className="container mx-auto mt-8 px-8 py-4">

<h3 className="text-lg font-bold text-cyan-700 mb-4 text-right">
الحالة الصحية
</h3>
<table className="w-full border-collapse">
{/* رأس الجدول */}
<thead>
<tr className="bg-gray-200">
<th className="px-4 py-2 text-right">الحالة/المرض</th>
<th className="px-4 py-2 text-right">تاريخ التشخيص</th>
<th className="px-4 py-2 text-right">الأعراض</th>
<th className="px-4 py-2 text-right">العلاجات الحالية</th>
<th className="px-4 py-2 text-right">المزود الحالي</th>
<th className="px-4 py-2 text-right">زيارة الشهر</th>
</tr>
</thead  >          {/* جسم الجدول */}
    <tbody>
    <tr className="bg-blue-100 border-b border-white">
        <td className="px-4 py-2 text-right">سرطان المعدة</td>
        <td className="px-4 py-2 text-right">13/1/2023</td>
        <td className="px-4 py-2 text-right">
            <ul className="list-disc list-inside">
                <li>تقي</li>
                <li>نفخة</li>
                <li>صداع</li>
            </ul>
        </td>
        <td className="px-4 py-2 text-right">
            <ul className="list-disc list-inside">
                <li>علاجيميائي</li>
                <li>مسكناسيتامول</li>
                <li>مشروباتبية</li>
            </ul>
        </td>
        <td className="px-4 py-2 text-right">الإغاثة الطبية</td>
        <td className="px-4 py-2 text-right">15/12/2024</td>
    </tr>
    <tr className="bg-blue-100 border-b border-white">
        <td className="px-4 py-2 text-right">سرطان المعدة</td>
        <td className="px-4 py-2 text-right">13/1/2023</td>
        <td className="px-4 py-2 text-right">
            <ul className="list-disc list-inside">
                <li>تقي</li>
                <li>نفخة</li>
                <li>صداع</li>
            </ul>
        </td>
        <td className="px-4 py-2 text-right">
            <ul className="list-disc list-inside">
                <li>علاجيميائي</li>
                <li>مسكناسيتامول</li>
                <li>مشروباتبية</li>
            </ul>
        </td>
        <td className="px-4 py-2 text-right">الإغاثة الطبية</td>
        <td className="px-4 py-2 text-right">15/12/2024</td>
    </tr>
    <tr className="bg-blue-100 border-b border-white">
        <td className="px-4 py-2 text-right">سرطان المعدة</td>
        <td className="px-4 py-2 text-right">13/1/2023</td>
        <td className="px-4 py-2 text-right">
            <ul className="list-disc list-inside">
                <li>تقي</li>
                <li>نفخة</li>
                <li>صداع</li>
            </ul>
        </td>
        <td className="px-4 py-2 text-right">
            <ul className="list-disc list-inside">
                <li>علاجيميائي</li>
                <li>مسكناسيتامول</li>
                <li>مشروباتبية</li>
            </ul>
        </td>
        <td className="px-4 py-2 text-right">الإغاثة الطبية</td>
        <td className="px-4 py-2 text-right">15/12/2024</td>
    </tr>
    <tr className="bg-blue-100 border-b border-white">
        <td className="px-4 py-2 text-right">سرطان المعدة</td>
        <td className="px-4 py-2 text-right">13/1/2023</td>
        <td className="px-4 py-2 text-right">
            <ul className="list-disc list-inside">
                <li>تقي</li>
                <li>نفخة</li>
                <li>صداع</li>
            </ul>
        </td>
        <td className="px-4 py-2 text-right">
            <ul className="list-disc list-inside">
                <li>علاجيميائي</li>
                <li>مسكناسيتامول</li>
                <li>مشروباتبية</li>
            </ul>
        </td>
        <td className="px-4 py-2 text-right">الإغاثة الطبية</td>
        <td className="px-4 py-2 text-right">15/12/2024</td>
    </tr>

    {/* صفوف*/}
    </tbody>
</table>

</div>
        </div>
    );
};

export default UserProfile;