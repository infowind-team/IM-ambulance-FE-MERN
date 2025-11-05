'use client';

import { Card, CardHeader, CardTitle, CardContent } from './card';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface CardSectionProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}

export function CardSection({ title, icon: Icon, children }: CardSectionProps) {
  return (
    <Card className="border-[#2160AD]/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Icon className="w-5 h-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
      </CardContent>
    </Card>
  );
}