// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { AuthLayout } from '../components/AuthLayout';
// import { Card } from '../components/Card';
// import { TextField } from '../components/TextField';
// import { Button } from '../components/Button';
// import { Link } from '../components/Link';

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Login with:', { username, password });
//     // Navigate to calendar after successful login
//     router.push('/calendar');
//   };

//   return (
//     <AuthLayout>
//       <Card>
//         {/* Title */}
//         <div className="content-stretch flex h-[35.998px] items-start w-full" data-name="Heading 1">
//           <p className="basis-0 font-['Lato:SemiBold',sans-serif] grow leading-[36px] min-h-px min-w-px not-italic text-[#2160ad] text-[30px] text-center">
//             Log In
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={(e) => handleLogin(e)} className="w-full">
//           <div className="flex flex-col gap-[24px]">
//             {/* Username Field */}
//             <TextField
//               label="Username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />

//             {/* Password Field */}
//             <TextField
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             {/* Login Button */}
//             <div className="mt-[24px]">
//               <Button type="submit">Log In</Button>
//             </div>

//             {/* Forgot Password Link */}
//             <div className="flex justify-center mt-[20px]">
//               <Button variant="link" onClick={() => router.push('/forgot-password')}>
//                 Forgot Password
//               </Button>
//             </div>

//             {/* Sign Up Link */}
//             <div className="flex justify-center items-center gap-[4px] mt-[22px]">
//               <p className="font-['Lato:Regular',sans-serif] leading-[20px] not-italic text-[#4a5565] text-[14px] text-center">
//                 Don't have an account?
//               </p>
//               <Link variant="primary" onClick={() => router.push('/signUp')}>
//                 Sign up
//               </Link>
//             </div>
//           </div>
//         </form>
//       </Card>
//     </AuthLayout>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import AuthLayout from "@/layout/AuthLayout";
import { Card } from "@/components/Card";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";

interface LoginFormInputs {
  username: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("Login with:", data);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.username, password: data.password }),
      });

      const resData = await response.json();

      if (!response.ok) {
        alert(resData.message || "Login failed. Please try again.");
        return;
      }

      console.log("Login success:", resData);
      router.push("/calendar");
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <AuthLayout>
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#2160AD]">Log In</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
          {/* Username Field */}
          <div>
            <Controller
              name="username"
              control={control}
              rules={{
                required: "Username is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  label="Username"
                  type="text"
                  placeholder="Enter your email"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              }}
              render={({ field }) => (
                <TextField
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <div className="space-y-2">
            <Button type="submit" className="w-full">
              {isSubmitting ? "Logging in..." : "Log In"}
            </Button>
          </div>

          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-[#2160AD] hover:text-[#2160AD]/80 font-medium transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </AuthLayout>
  );
}

