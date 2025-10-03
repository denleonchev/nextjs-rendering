"use client";

import { SyntheticEvent, useState } from "react";

export const ClientComponentTwo = () => {
    const [text, setText] = useState('client component two');
    console.log('ClientComponentTwo render');

    return <input value={text} onChange={(e: SyntheticEvent) => {
        setText((e.target as HTMLInputElement).value);
    }}/>;
}
        