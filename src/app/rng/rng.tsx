'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RNG() {
    const { register, watch } = useForm({
        defaultValues: {
            from: '1',
            to: '10'
        }
    });

    const from = watch('from');
    const to = watch('to');
    const fromInt = parseInt(from);
    const toInt = parseInt(to);

    const getFromErrorMsg = () => {
        if (isNaN(fromInt)) {
            return 'Please enter a valid number'
        }

        return null;
    };

    const fromErrorMsg = getFromErrorMsg();
    const isFromValid = !fromErrorMsg;

    const getToErrorMsg = () => {
        if (isNaN(toInt)) {
            return 'Please enter a valid number'
        }

        if (!isFromValid) {
            return null;
        }

        if (fromInt > toInt) {
            return '"From" cannot be greater than "to"';
        }

        return null;
    };

    const toErrorMsg = getToErrorMsg();
    const isToValid = !toErrorMsg;

    const hasAnyError = !isFromValid || !isToValid;

    const [randomNum, setRandomNum] = useState<Number | null>(null);
    const [count, setCount] = useState(0);

    const generateNum = () => {
        const num = fromInt + Math.floor(Math.random() * (toInt - fromInt + 1));
        setRandomNum(num);
        setCount((prev) => prev + 1);
    };

    return (
        <Card className="w-60 max-w-screen">
            <CardContent>
                <FieldSet>
                    <FieldGroup>
                        <Field data-invalid={!isFromValid}>
                            <FieldLabel htmlFor="min-input">From<span className="font-thin">(inclusive)</span></FieldLabel>
                            <Input id="min-input" type="number" aria-invalid={!isFromValid} {...register('from')} />
                            {fromErrorMsg && <FieldError>{fromErrorMsg}</FieldError>}
                        </Field>

                        <Field data-invalid={!isToValid}>
                            <FieldLabel htmlFor="max-input">To<span className="font-thin">(inclusive)</span></FieldLabel>
                            <Input id="max-input" type="number" aria-invalid={!isToValid} {...register('to')} />
                            {toErrorMsg && <FieldError>{toErrorMsg}</FieldError>}
                        </Field>

                        <div className="flex flex-col gap-2">
                            <Button variant="outline" onClick={generateNum} disabled={hasAnyError}>Generate</Button>
                        </div>

                        {!!(randomNum !== null && !hasAnyError) && (
                            <div className="flex flex-col items-center overflow-hidden text-clip">
                                <span className="text-sm text-muted-foreground">Random Number #{count}:</span>
                                <span key={count} className="text-4xl font-bold tracking-tight animate-in fade-in duration-1000">
                                    <>{randomNum ?? 'Invalid'}</>
                                </span>
                            </div>
                        )}
                    </FieldGroup>
                </FieldSet>
            </CardContent>
        </Card>
    );
}
