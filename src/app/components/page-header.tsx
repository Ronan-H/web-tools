'use client';

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { HomeButton } from "./HomeButton";

type PageHeaderProps = {
    title: string;
    hideHomeButton?: boolean;
}

export function PageHeader(props: PageHeaderProps) {
    const { title, hideHomeButton } = props;

    return (
        <div className="w-full grid grid-cols-[1fr_auto_1fr] border-b border-border p-3 mb-3 items-center">
            {<HomeButton invisible={hideHomeButton} />}
            <h1 className="text-3xl font-bold leading-none">{title}</h1>
            &nbsp;
        </div>
    );
}
