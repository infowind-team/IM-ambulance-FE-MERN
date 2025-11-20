'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/layout/AuthLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sign up with:', { username, email, password, confirmPassword });
    router.push('/calendar');
  };

  return (
    <AuthLayout>
      <Card className="w-full max-w-sm bg-white rounded-2xl shadow-2xl">
        <CardContent className='p-8'>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-[#2160AD]">Sign Up</h1>
          </div>

          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="space-y-2">
              <Label className='text-sm' htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className='px-4 py-3 border border-gray-200 rounded-lg bg-white h-auto'
              />
            </div>
            <div className="space-y-2">
              <Label className='text-sm' htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className='px-4 py-3 border border-gray-200 rounded-lg bg-white h-auto'
              />
            </div>
            <div className="space-y-2">
              <Label className='text-sm' htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                className='px-4 py-3 border border-gray-200 rounded-lg bg-white h-auto'
              />
            </div>
            <div className="space-y-2">
              <Label className='text-sm' htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className='px-4 py-3 border border-gray-200 rounded-lg bg-white h-auto'
              />
            </div>
            <div className="space-y-2">
              <Button type="submit" className="w-full py-3! h-auto rounded-lg duration-200 shadow-md hover:shadow-lg" size='lg'>
                Sign Up
              </Button>
            </div>

            <div className="text-center">
              <span className="text-sm text-gray-500">or</span>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="text-[#2160AD] hover:text-[#2160AD]/80 font-medium transition-colors"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}