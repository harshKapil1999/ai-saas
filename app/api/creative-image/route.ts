import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import OpenAI from 'openai';
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt, amount = 1 , width = 1024, height = 1024} = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!replicate) {
            return new NextResponse("Replicate API Key not configured", { status: 500 });
        }
        
        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

        if (!amount) {
            return new NextResponse("Amount is required", { status: 400 });
        }
        if (!height && !width) {
            return new NextResponse("Height and width is required", { status: 400 });
        }

        const response = await replicate.run(
            "stability-ai/sdxl:1bfb924045802467cf8869d96b231a12e6aa994abfe37e337c63a4e49a8c6c41",
            {
              input: {
                prompt,
                width: parseInt(width),
                height: parseInt(height),
                num_outputs: parseInt(amount),
              }
            });

        return NextResponse.json(response);

    } catch (error) {
        console.log("[IMAGE_ERROR", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}