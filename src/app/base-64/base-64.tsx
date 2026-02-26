'use client';

import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import CopyButton from '../components/copy-button';

const base64Pattern = /^[A-Za-z0-9=+\/]*$/;

export default function Base64Tool() {
    const { register, watch, setValue } = useForm({
        defaultValues: {
            encoded: '',
            decoded: '',
        },
    });

    const encoded = watch('encoded');
    const decoded = watch('decoded');

    const encode = (value: string) => {
        try {
            const encoded = btoa(value);
            setValue('encoded', encoded);
        } catch {
            setValue('encoded', 'Invalid input');
        }
    };

    const decode = (value: string) => {
        const isValid = base64Pattern.test(value);

        if (!isValid) {
            setValue('decoded', 'Invalid input');
            return;
        }

        try {
            const decoded = atob(value);
            setValue('decoded', decoded);
        } catch {
            setValue('decoded', 'Invalid input');
        }
    };

    return (
        <div className="w-100 max-w-screen">
            <FieldSet>
                <FieldGroup>
                    <Field>
                        <div className="flex flex-row gap-3">
                            <FieldLabel htmlFor="decoded">Decoded</FieldLabel>
                            <CopyButton content={decoded} />
                        </div>
                        <Textarea
                            id="decoded"
                            rows={5}
                            {...register('decoded')}
                            onChange={(e) => encode(e.target.value)}
                        />
                    </Field>

                    <Field>
                        <div className="flex flex-row gap-3">
                            <FieldLabel htmlFor="encoded">Encoded</FieldLabel>
                            <CopyButton content={encoded} />
                        </div>
                        <Textarea
                            id="encoded"
                            rows={5}
                            {...register('encoded')}
                            onChange={(e) => decode(e.target.value)}
                        />
                    </Field>
                </FieldGroup>
            </FieldSet>
        </div>
    );
}
