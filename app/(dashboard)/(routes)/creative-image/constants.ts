import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Image Prompt is required",
    }),
    amount: z.string().min(1),
    width: z.string().min(1),
    height: z.string().min(1)
});

export const amountOptions = [
    {
        value: "1",
        label: "1 Photo",
    },
    {
        value: "2",
        label: "2 Photos",
    },
    {
        value: "3",
        label: "3 Photos",
    },
    {
        value: "4",
        label: "4 Photos",
    }
]

export const widthOptions = [
    
    {
        value: "512",
        label: "width: 512",
    },
    {
        value: "640",
        label: "width: 640",
    },
    
    {
        value: "960",
        label: "width: 960",
    },
    {
        value: "1024",
        label: "width: 1024",
    },
]
export const heightOptions = [
    
    {
        value: "512",
        label: "height: 512",
    },
    {
        value: "640",
        label: "height: 640",
    },
    
    {
        value: "960",
        label: "height: 960",
    },
    {
        value: "1024",
        label: "height: 1024",
    },
]