'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/layout/AuthLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login with:', { username, password });

    // Simulate login success → redirect to calendar
    router.push('/calendar');
  };

  return (
    <AuthLayout>
      <Card className="w-full max-w-sm bg-white rounded-2xl shadow-2xl">
        <CardContent className='p-8'>
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-[#2160AD]">Log In</h1>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="w-full space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <Label className='text-sm' htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={isLoading}
                autoFocus
                className='px-4 py-3 border border-gray-200 rounded-lg bg-white h-auto'
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label className='text-sm' htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className='px-4 py-3 border border-gray-200 rounded-lg bg-white h-auto'
              />
            </div>

            {/* Login Button */}
            <div className="space-y-2">
              <Button type="submit" className="w-full py-3! h-auto rounded-lg duration-200 shadow-md hover:shadow-lg" size='lg'>
                {isLoading ? 'Signing in...' : 'Log In'}
              </Button>
            </div>

            {/* Forgot Password Link */}
            <div className="text-center">
              <Link
                href="/forgot-password"
                className="text-base text-gray-500 hover:text-gray-700 transition-colors"
              >
                Forgot Password
              </Link>
            </div>

            {/* Sign Up Link */}
            {/* <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  href="/signup"
                  className="text-[#2160AD] hover:text-[#2160AD]/80 font-medium transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div> */}
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}