'use client'

import { useMemo, useState } from "react";
import { WORD_LIST } from "./words";
import { generatePasswords } from "./password-functions";
import CopyButton from "../components/copy-button";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { FieldGroup, Field, FieldTitle, FieldDescription } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";

const NUM_GEN = 10;

const CHECKBOX_FIELDS = [
    {
        fieldName: 'capitalizeEnd',
        label: 'Capitalize last letter'
    },
    {
        fieldName: 'includeDigit',
        label: 'Include a digit'
    },
    {
        fieldName: 'includeSymbol',
        label: 'Include a symbol'
    },
] as const;

export default function PasswordGen() {
    const { control, watch, register } = useForm({
        defaultValues: {
            numWords: [2],
            capitalizeEnd: false,
            includeDigit: false,
            includeSymbol: false,
        }
    });

    const numWords = watch('numWords');
    const capitalizeEnd = watch('capitalizeEnd');
    const includeDigit = watch('includeDigit');
    const includeSymbol = watch('includeSymbol');

    const passwords = useMemo(() => generatePasswords(
        WORD_LIST,
        {
            numWords: numWords[0],
            capitalizeEnd,
            includeDigit,
            includeSymbol,
        },
        NUM_GEN,
    ), [numWords, capitalizeEnd, includeDigit, includeSymbol]);

    return (<>
        <div className="mx-auto grid w-full max-w-xs gap-3">
            <FieldGroup className="max-w-sm">
                {CHECKBOX_FIELDS.map(({ fieldName, label }) => (
                    <Field orientation="horizontal">
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
                    </Field>
                ))}
                <Field>
                    <Label htmlFor="numWords">Number of Words</Label>
                    <FieldDescription>{numWords}</FieldDescription>
                    <Controller
                        control={control}
                        name="numWords"
                        render={({ field }) => (
                            <Slider
                                min={1}
                                max={5}
                                step={1}
                                value={field.value}
                                onValueChange={field.onChange}
                            />
                        )}
                    />
                </Field>
            </FieldGroup>
        </div>
        <div className="grid grid-cols-2 grid-cols-[auto_auto] gap-3">
            {passwords.map(({ key, password }) => (
                <React.Fragment key={key}>
                    <span className="text-xl">{password}</span>
                    <CopyButton content={password} />
                </React.Fragment>
            ))}
        </div>
        </>
    );
}
