'use server';

import { ChatInterface } from "@/app/ui/chat/chat-interface";
// import { ChatScreen } from "@/app/ui/chat/chat-input";
import { ChatFace } from "@/app/ui/chat/chat-use-api";

export default async function Page() {
    return (
        <ChatInterface/>
    )
}