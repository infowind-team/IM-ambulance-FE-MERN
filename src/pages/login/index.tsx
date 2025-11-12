'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/layout/AuthLayout';
import { Card } from '@/components/Card';
import { TextField } from '@/components/TextField';
import { Button } from '@/components/Button';
import { da } from 'date-fns/locale';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const router = useRouter();

  const validateForm = ()=>{
    if(!username || !password){
      alert("username or password missing")
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert('Please enter a valid username.');
      return false;
    }

    return true;
  }

  const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    if (!validateForm()) return;
    
    console.log('Login with:', { username, password });

    try{
      const response = await fetch('/api/login',{
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password })
      })

      const data  = await response.json();
      if(!response.ok){
        alert( "Login failed. Please try again.");
        return;
      }
      console.log('login data' , data)
      
      if (data?.data?.access_token) {
      console.log(data.data.access_token)
      localStorage.setItem('accessToken', data.data.access_token)
      console.log('Tokens and user stored successfully');
    } else {
      console.warn('No access_token found in response');
    }

      setTimeout(() => {
        router.push('/calendar');
      }, 200);
    }catch(err: any){
      console.log(err)
    }

  };

  return (
    <AuthLayout>
      <Card className="w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#2160AD]">Log In</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full space-y-6">
          {/* Username Field */}
          <TextField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password Field */}
          {/* Password Field */}
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Login Button */}
          <div className="space-y-2">
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
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