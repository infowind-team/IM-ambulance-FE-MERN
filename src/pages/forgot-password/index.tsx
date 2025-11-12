'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/Card';
import { TextField } from '@/components/TextField';
import { Button } from '@/components/Button';
import { CheckCircle } from 'lucide-react';
import { AuthLayout } from '@/components/AuthLayout';

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
      <Card className="w-full max-w-md">
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
          <TextField
            label="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={showSuccess}
            required
          />

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

          <Button
            type={showSuccess ? 'button' : 'submit'}
            disabled={showSuccess}
            className="w-full bg-[#2160AD] text-white hover:bg-[#1e55a0] disabled:opacity-60"
          >
            {showSuccess ? 'Reset link sent! Redirecting…' : 'Verify'}
          </Button>
        </form>
      </Card>
    </AuthLayout>
  );
}