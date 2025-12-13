// import React from 'react'
// import { Link, Navigate, useNavigate } from 'react-router-dom'
// import { useState } from 'react'


// export default function LoginPage() {

//   const navigate = useNavigate();



//   function handleLogin(e) {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     const validUser = users.find(
//       (user) => 
//         user.email === formData.email &&
//         user.password === formData.password
//     );

//     if(!validUser) {
//       alert("Invalid email or password")
//       return;
//     }

//     localStorage.setItem("currentUser", JSON.stringify(validUser));

//     navigate("/")

//   }

//   if(localStorage.getItem('currentUser')){
//     return <Navigate to='/'/>
//   }

//   function ProtectedRoute ({ children }) {
//     if (!localStorage.getItem('currentUser')) {
//       return <Navigate to={'/login'} />
//     }
//     return children
//   }

//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   })

//   const [errors , setErrors] = useState({})

//   function handleChange(e) {
//     const {name, value} = e.target;

//     setFormData({
//       ...formData,
//       [name]:value
//     })
//   }


//   // Form validate
//   function validate() {
//     let newErrors = {};

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     }else if(!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email formate';
//     }

//     if(!formData.password) {
//       newErrors.password = "Password is required";
//     }else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters'
//     }

//     setErrors (newErrors);
//     return Object.keys(newErrors).length === 0;
//   }


//   function handleSubmit (e) {
//     e.preventDefault();

//     if(!validate()) return;
//     console.log("form is valid -> send to backend");
    
//   }

//   return (
//     <>

//       <div className='w-full h-screen  flex justify-center items-center'>
//         <div className='w-full h-screen grid sm:grid-cols-2'>
//           {/* 1 */}
//           <div className='bg-black sm:flex justify-center items-center hidden sm:block'>
//             <h1 className='text-white text-5xl'>STYLESPHERE</h1>
//           </div>

//           {/* 2 */}
//           <div className='w-full bg-gray-100 flex flex-col p-10  sm:gap-30'>
//             <div className='flex flex-col gap-5'>
//               <h1 className='text-3xl font-semibold'>LOGIN</h1>
//               <p className='text-gray-600 text-lg'>Get access to your Orders, Wishlist and Recommendations</p>
//             </div>

//             <div className='flex flex-col gap-10'>
//               <div>
//                 <h1>Email</h1>
//                 {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
//                 <input className='border-2 p-3 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" name='email' value={formData.email} onChange={handleChange} placeholder='Enter email' />
//               </div>
//               <div>
//                 <h1>Password</h1>
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//                 <input className='border-2 p-3 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" name='password' value={formData.password} onChange={handleChange} placeholder='Enter Password' />
//               </div>
//               <div>
//                 <button type='submit' onClick={handleSubmit} className='cursor-pointer w-full bg-black p-3 text-white rounded-md text-2xl'>Sign in</button>
//               </div>
//               <div className='flex justify-center items-center text-nowrap gap-5'>
//                 <h1 className='font-semibold text-gray-600'>Don't have an account ?</h1>
//                 <Link to={'/signup'}> <button className=' bg-black p-1 pl-3 pr-3 text-white rounded-md text-lg cursor-pointer'>Sign Up</button></Link>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
