'use client';

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

type HomeButtonProps = {
    invisible?: boolean;
}

export function HomeButton(props: HomeButtonProps) {
    const { invisible } = props;

    return (
        <Button
            variant="outline"
            className={"justify-self-start cursor-pointer" + (invisible ? ' invisible' : '')}
            asChild
        >
            <Link href="/">
                <Home />
            </Link>
        </Button>
    );
}
