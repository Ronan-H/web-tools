'use client';

import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import Link from 'next/link';

export function InfoButton() {
    return (
        <Button
            variant="outline"
            className={'justify-self-start cursor-pointer'}
            asChild
        >
            <Link href="/about">
                <Info />
            </Link>
        </Button>
    );
}
