"use client";

import React, { SyntheticEvent, useState } from "react";

export const ClientComponentOne = ({ children }: { children: React.ReactNode}) => {
    const [text, setText] = useState('client component one');
    console.log('ClientComponentOne render');

    return (
        <>
            <input value={text} onChange={(e: SyntheticEvent) => {
                setText((e.target as HTMLInputElement).value);
            }}/>
            {children}
        </>
    )
}
        