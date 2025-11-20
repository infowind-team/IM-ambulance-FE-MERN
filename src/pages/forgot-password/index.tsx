'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/layout/AuthLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => router.push('/login'), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sending reset link to:', email);
    setShowSuccess(true);
  };

  return (
    <AuthLayout>
      <Card className="w-full max-w-sm bg-white rounded-2xl shadow-2xl">
        <CardContent className='p-8'>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-[#2160AD]">Forgot Password?</h1>
          </div>

          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <p className="text-green-800 font-medium">Reset link sent!</p>
              <p className="text-green-600 text-sm">Redirecting to login...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className='text-sm' htmlFor="email">Enter your email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={showSuccess}
                required
                className='px-4 py-3 border border-gray-200 rounded-lg bg-white h-auto'
              />
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{' '}
                <Link
                  href="/login"
                  className="text-[#2160AD] hover:text-[#2160AD]/80 font-medium transition-colors text-base"
                >
                  Log In
                </Link>
              </p>
            </div>
            <div className="space-y-2">
              <Button
                type={showSuccess ? 'button' : 'submit'}
                disabled={showSuccess}
                className="w-full py-3! h-auto rounded-lg duration-200 shadow-md hover:shadow-lg" size='lg'
              >
                {showSuccess ? 'Reset link sent! Redirecting…' : 'Verify'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}