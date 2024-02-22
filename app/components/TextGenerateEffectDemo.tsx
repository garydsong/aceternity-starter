"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam a laborum omnis architecto fugit, modi vero dicta sequi! Odio quia labore ex! Aliquid, ipsam nam asperiores repudiandae veritatis soluta.
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}