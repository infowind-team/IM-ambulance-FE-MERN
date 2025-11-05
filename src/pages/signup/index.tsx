'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/Card';
import { TextField } from '@/components/TextField';
import { Button } from '@/components/Button';
import { AuthLayout } from '@/components/AuthLayout';

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
      <Card className="w-full max-w-md bg-white p-6 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#2160AD]">Sign Up</h1>
        </div>

        <form onSubmit={handleSignUp} className="space-y-6">
          <TextField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />

          <Button type="submit" className="w-full bg-[#2160AD] text-white hover:bg-[#1e55a0]">
            Sign Up
          </Button>

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
      </Card>
    </AuthLayout>
  );
}