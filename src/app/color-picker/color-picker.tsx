'use client';

import { Input } from '@/components/ui/input';
import { HexColorPicker } from 'react-colorful';
import { useForm } from 'react-hook-form';
import CopyButton from '../components/copy-button';

export default function ColorPicker() {
    const { register, watch, setValue } = useForm({
        defaultValues: {
            color: '#000000',
        },
    });

    const color = watch('color');

    return (
        <div className="w-60 max-w-screen flex flex-col items-center gap-3">
            <div className="col-span-3 row-span-1">
                <HexColorPicker
                    color={color}
                    onChange={(newColor) => setValue('color', newColor)}
                />
            </div>
            <div className="flex flex-row gap-3 items-center w-full justify-center">
                <div
                    className="w-10 h-10 rounded border border-white justify-self-start"
                    style={{ backgroundColor: color }}
                />
                <Input className="w-22" {...register('color')} />
                <CopyButton content={color} />
            </div>
        </div>
    );
}
