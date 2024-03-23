"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, MessageSquare, Music, Video } from "lucide-react";
import { useRouter } from "next/navigation";


const tools = [
  /* {
    label: "Chat Completion",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  }, */
  {
    label: "Chat Completion",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/chat"
  },
  {
    label: "Creative Image",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/creative-image"
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video"
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code"
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music"
  },
  /* {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image"
  }, */
]

const DashboardPage = () => {
  const router = useRouter();

    return (
      <div>
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
          AI-Powered Brilliance: Transforming Data into Decision.
          </h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Unleash the AI Advantage: Redefining Tomorrow, Today!
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
          {tools.map((tool) => (
            <Card 
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-4 border-black/5 flex items-center justify-center hover:shadow-md transition cursor-pointe aspect-square max-w-xs w-full"
            >
              <div className="flex flex-col items-center gap-x-4">
                <div className={cn ("p-2 w-fit rounded-md ", tool.bgColor)}>
                  <tool.icon className={cn ("w-8 h-8", tool.color)}/>
                </div>
                <div className="font-semibold">
                  {tool.label}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    )
  }
  
  export default DashboardPage;