import 'client-only';

import { useEffect } from "react"

export const useAlert = (text: string) => {
    useEffect(() => {
        window.alert(text);
    }, [
        text
    ]);
}
