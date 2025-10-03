"use client";

import { SyntheticEvent, useState } from "react";

export const NavSearch = () => {
    const [text, setText] = useState('text');
    console.log('NavSearch render');

    return <input value={text} onChange={(e: SyntheticEvent) => {
        setText((e.target as HTMLInputElement).value);
    }}/>;
}
        