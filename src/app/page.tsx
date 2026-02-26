'use client';

import { PageHeader } from './components/page-header';
import PageLayout from './components/page-layout';
import { Button } from '@/components/ui/button';
import { TOOL_LIST } from './tool-list';
import Link from 'next/link';

export default function Home() {
    return (
        <PageLayout>
            <PageHeader title="Tidy Web Tools" hideHomeButton />
            <h2 className="text-xl text-gray-500 leading-none mb-3">
                Select a tool
            </h2>
            <div className="flex flex-col gap-3">
                {TOOL_LIST.map((tool) => (
                    <Button
                        key={tool.route}
                        variant="outline"
                        className="cursor-pointer"
                        asChild
                    >
                        <Link href={tool.route}>{tool.title}</Link>
                    </Button>
                ))}
            </div>
        </PageLayout>
    );
}
