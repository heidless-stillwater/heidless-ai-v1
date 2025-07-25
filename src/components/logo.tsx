import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-foreground", className)}>
      <Sparkles className="h-6 w-6 text-primary" />
      <span className="text-xl font-headline font-bold">
        heidless <span className="text-accent">ai</span>
      </span>
    </Link>
  );
}
