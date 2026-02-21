'use client';

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

type HomeButtonProps = {
    invisible?: boolean;
}

export function HomeButton(props: HomeButtonProps) {
    const { invisible } = props;

    const router = useRouter();

    return (
        <Button
            variant="outline"
            className={"justify-self-start cursor-pointer" + (invisible ? ' invisible' : '')}
            onClick={() => router.push('/')}
        >
            <Home />
        </Button>
    );
}
