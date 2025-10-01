"use client";

import { useState } from "react";

export default function About() {
    const [text, setText] = useState('test');
    console.log('about server component')
    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <h1>{text}</h1>
        </>
    )
}