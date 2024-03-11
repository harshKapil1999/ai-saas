import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

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
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!replicate) {
            return new NextResponse("OpenAI API Key not configured", { status: 500 });
        }
        
        if (!messages) {
            return new NextResponse("Prompt are required", { status: 400 });
        }

        /* const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0613",
            messages
        }); */

        const input = {
            debug: false,
            top_k: 50,
            top_p: 1,
            prompt: messages,
            temperature: 0.5,
            system_prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
            max_new_tokens: 500,
            min_new_tokens: -1
          };
          
          const response = await replicate.run("meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3", { input });
          //console.log(response);

        return NextResponse.json(response);

    } catch (error) {
        console.log("[CONVERSATION_ERROR", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}