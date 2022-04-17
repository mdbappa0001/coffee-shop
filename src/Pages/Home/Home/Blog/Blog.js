import React from 'react';

const Blogs = () => {
    return (

        <>
        
            <div className='grid grid-cols-2'>
                <div className='border-2 border-slate-500 m-6'>
                    <h1 className='text-2xl font-bold text-center p-3'>Authentication</h1>
                    <p className='font-bold m-8'>1. কোন একটা সিস্টেমে এক্সেস দেয়ার জন্য যে আইডেনটিফাই করা হয় সেটাই হলো মূলত অথেনটিকেশন সিস্টেম।যেমনঃ লগইন প্রসেস,যেখানে মূলত ইমেইল আইডি/পাসওয়ার্ড/ফোন নাম্বার ইত্যাদি চেক আউট করার মাধ্যমে ইউজারকে সিস্টেমে এক্সেস দেয়া হয়।<br />2. Occurs before authorization. <br />3. Verifies user's credentials. <br />4. Check permission details to identity him/her.</p>
                </div>
                <div className='border-2 border-slate-500 m-6'>
                    <h1 className='text-2xl font-bold text-center p-3'>Authorization</h1>
                    <p className='font-bold m-8'>1. Authorization হলো ওয়েবসাইটে এক্সেস করার জন্য পারমিশন দেয়া। <br />2. Authentication এর পরেই Authorization process হয়ে থাকে। <br />
                    3. Validates user's permission. <br />4. Checks user's previledges to access resources.</p>
                </div>
            </div>
            <div className='border-2 border-slate-500 m-6'>
                <h1 className='text-2xl font-bold text-center p-3'>Why we use Firebase</h1>
                <p className=' font-bold  p-3'>
                    1. Unlimited reporting. <br />
                    2. Integration with Other Services. <br />
3. Firebase ডায়নামিক অ্যাপের জন্য পূর্ণাঙ্গ ব্যাকএন্ড কোড লেখার সময় সাশ্রয়ী বিকল্প মাধ্যম।<br />
4. Firebase এর মাধ্যমে third party Authentication খুব সহজেই কানক্ট করা যায়। যেমনঃ গুগল, ফেসবুক, গিটহাব,টুইটার ইত্যাদি।<br />
5. Firebase প্রযুক্তিগত দিক দিয়ে ইমপ্লিমেন্ট করা খুবই সহজ।<br />
6. Firebase helps you build and run successful apps. <br />
7. Growth and User Engagement. <br />  
                </p>
                <h1 className='text-2xl font-bold text-center p-3'> Other options to implement Authentication</h1>
                <p className=' font-bold  p-3'>
                    1. Octa <br />
                    2. Pingidentity <br />
                    3. Frontegg <br />
                    4. Amazon Cognito <br />
                    5. Ory <br />
                    6. STYTCH <br />
                    7. OneLogin
                </p>
            </div>
            <div className='border-2 border-slate-500 m-6'>
                <h1 className='text-2xl font-bold text-center p-3'>What other services does firebase provide other than authentication</h1>
                <p className=' font-bold text-center p-3'>

                
                </p>
            </div>
        </>
    );
};

export default Blogs;