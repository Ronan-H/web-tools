'use client';

import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

type CopyButtonProps = {
    content: string;
};

export default function CopyButton(props: CopyButtonProps) {
    const { content } = props;

    const tryWriteContent = async () => {
        return navigator.clipboard
            .writeText(content)
            .then(() => {
                toast.success('Copied to clipboard');
            })
            .catch(() => {
                toast.error('Failed to copy to clipboard');
            });
    };

    return (
        <Button
            variant="outline"
            className={'cursor-pointer aspect-square'}
            onClick={async () => await tryWriteContent()}
        >
            <Copy />
        </Button>
    );
}
