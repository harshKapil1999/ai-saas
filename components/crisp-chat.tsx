"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect (() => {
        Crisp.configure("2a2b2066-9a67-44f4-bbc6-88d2e6708297");
    }, []);

    return null;
}
