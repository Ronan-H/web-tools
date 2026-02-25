'use client'

import { useEffect, useMemo, useState } from "react";
import { WORD_LIST } from "./words";
import { generatePassword, generatePasswords } from "./password-functions";
import CopyButton from "../components/copy-button";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { FieldGroup, Field, FieldDescription } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const CHECKBOX_FIELDS = [
    {
        fieldName: 'includeDigit',
        label: 'Include a digit'
    },
    {
        fieldName: 'includeSymbol',
        label: 'Include a symbol'
    },
    {
        fieldName: 'capitalizeEnd',
        label: 'Capitalize last letter'
    },
] as const;

export default function PasswordGen() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, []);

    const { control, watch } = useForm({
        defaultValues: {
            numWords: [2],
            capitalizeEnd: false,
            includeDigit: true,
            includeSymbol: true,
        }
    });

    const numWords = watch('numWords');
    const capitalizeEnd = watch('capitalizeEnd');
    const includeDigit = watch('includeDigit');
    const includeSymbol = watch('includeSymbol');

    const [iteration, setIteration] = useState(0);

    const password = useMemo(() => generatePassword(
        WORD_LIST,
        {
            numWords: numWords[0],
            capitalizeEnd,
            includeDigit,
            includeSymbol,
        },
    ), [numWords, capitalizeEnd, includeDigit, includeSymbol, iteration]);

    const fontSizeMap = {
        1: 'text-4xl',
        2: 'text-3xl',
        3: 'text-3xl',
        4: 'text-3xl',
    } as { [key: number]: string };
    const fontSize = fontSizeMap[numWords[0]];

    // This is to avoid hydration mismatch errors, and avoid calculating passwords server-side
    const passwordPlaceholder = () => (
        <div className="flex flex-col items-center">
            <span className={`${fontSize} whitespace-nowrap invisible`}>-</span>
            <span className="italic invisible">
                -
            </span>
            <span className="invisible">-</span>
        </div>
    );

    const passwordSection = () => (
        <div className="grid grid-cols-2 grid-cols-[auto_auto] gap-3">
            <div className="flex flex-col items-center">
                <span className={`${fontSize} whitespace-nowrap`}>{password.password}</span>
                <span className="italic">
                    {password.words.join(', ')}
                </span>
                <span>{password.password.length} characters</span>
            </div>
        </div>
    );

    return (<>
        <div className="flex flex-col items-center gap-3 w-50">
            <FieldGroup className="max-w-sm mb-3">
                <Field>
                    <Label htmlFor="numWords">Number of Words</Label>
                    <FieldDescription>{numWords}</FieldDescription>
                    <Controller
                        control={control}
                        name="numWords"
                        render={({ field }) => (
                            <Slider
                                min={1}
                                max={4}
                                step={1}
                                value={field.value}
                                onValueChange={field.onChange}
                            />
                        )}
                    />
                </Field>
                <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-3 items-center">
                    {CHECKBOX_FIELDS.map(({ fieldName, label }) => (
                        <React.Fragment key={fieldName}>
                            <Label htmlFor={fieldName}>{label}</Label>

                            <Controller
                                name={fieldName}
                                control={control}
                                render={({ field }) => (
                                    <Checkbox
                                        id={fieldName}
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </FieldGroup>
            <span className="text-sm text-muted-foreground">Generated password:</span>
            {isClient ? passwordSection() : passwordPlaceholder()}
            <div className="flex flex-row">
                <CopyButton content={password.password} />
                <Button
                    variant="outline"
                    className={"cursor-pointer aspect-square"}
                    onClick={() => setIteration((i) => i + 1)}
                >
                    <RefreshCw />
                </Button>
            </div>
        </div>
    </>
    );
}
