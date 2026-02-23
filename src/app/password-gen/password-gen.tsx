'use client'

import { useState } from "react";
import { WORD_LIST } from "./words";
import { generatePasswords } from "./password-functions";
import CopyButton from "../components/copy-button";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";

const NUM_GEN = 10;

export default function PasswordGen() {
    const { control, watch } = useForm({
        defaultValues: {
            numWords: [2],
        }
    });

    const [passwords, setPasswords] = useState(generatePasswords(
        WORD_LIST,
        {
            numWords: 1,
            capitalEnd: true,
            includeDigit: true,
            includeSymbol: true,
        },
        NUM_GEN,
    ));

    return (<>
        <div className="mx-auto grid w-full max-w-xs gap-3">
            <div className="flex items-center justify-between gap-2">
                <Label htmlFor="slider-demo-temperature">Num words</Label>
                <span className="text-muted-foreground text-sm">
                {watch('numWords')}
                </span>
            </div>

            <Controller
                control={control}
                name="numWords"
                render={({ field }) => (
                    <Slider
                    min={2}
                    max={5}
                    step={1}
                    value={field.value}
                    onValueChange={field.onChange}
                    />
                )}
                />
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
