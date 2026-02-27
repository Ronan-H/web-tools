'use client';

import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronsUpDown } from 'lucide-react';
import React, { useState } from 'react';

type ToolInfoProps = {
    children: React.ReactNode;
};

export function ToolInfo(props: ToolInfoProps) {
    const { children } = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className={
                'flex flex-col gap-2 rounded-md border p-2 mb-4 max-w-screen'
            }
        >
            <Button variant="ghost">
                <CollapsibleTrigger asChild>
                    <div className="flex items-center justify-between gap-4 px-4 cursor-pointer">
                        <h4 className="text-sm font-semibold">
                            Tool Information
                        </h4>
                        <ChevronsUpDown />
                        <span className="sr-only">Toggle details</span>
                    </div>
                </CollapsibleTrigger>
            </Button>
            <CollapsibleContent>
                <div className="rounded-md border-t px-4 py-2 text-sm w-[350px]">
                    {children}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}
