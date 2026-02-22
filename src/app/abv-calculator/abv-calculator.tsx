'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

function calcAbv(og: string, fg: string) {
    const ogFloat = parseFloat(og);
    const fgFloat = parseFloat(fg);

    if (Number.isNaN(ogFloat) || Number.isNaN(fgFloat)) {
        return '-';
    }

    return `${((ogFloat - fgFloat) * 131.25).toFixed(2)}%`;
}

export default function AbvCalculator() {
    const { register, watch } = useForm({
        defaultValues: {
            og: '1.1',
            fg: '1.0'
        }
    });

    const og = watch('og');
    const fg = watch('fg');

    return (
        <div className="w-60 max-w-screen">
            <FieldSet>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="og-input">Original Gravity (OG)</FieldLabel>
                        <Input id="og-input" type="number" data-testid="og-input" {...register('og')} />
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="fg-input">Final Gravity (FG)</FieldLabel>
                        <Input id="fg-input" type="number" data-testid="fg-input" {...register('fg')} />
                    </Field>

                    <div className="flex flex-col items-center overflow-hidden text-clip">
                        <span className="text-sm text-muted-foreground">Estimated ABV</span>
                        <span className="text-4xl font-bold tracking-tight" data-testid="abv-result">
                            {calcAbv(og, fg)}
                        </span>
                    </div>
                </FieldGroup>
            </FieldSet>
        </div>
    );
}
