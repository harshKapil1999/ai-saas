import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";

const SettingsPage = () => {
    return (
        <div>
            <Heading 
                title="Settings"
                description="Manage account settings."
                icon={Settings}
                iconColor="text-grey-700"
                bgColor="bg-grey-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    You are Free to use the AI-SAAS. And If you are having any issue with the ai generation you can directly chat with us by clicking on chatbot icon at the bottom right corner. 
                </div>
            </div>
        </div>
    )
}

export default SettingsPage;