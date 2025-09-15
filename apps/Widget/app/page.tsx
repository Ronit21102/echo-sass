"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useVapi } from "@/modules/widget/hooks/use-vapi";
export default function Page() {
  const {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  } = useVapi();
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button onClick={startCall} disabled={isConnecting || isConnected}>
        Start Call
      </Button>
      <Button onClick={endCall} disabled={!isConnected} variant={"destructive"}>
        End Call
      </Button>
      <p>isConnecting: {isConnecting ? "true" : "false"}</p>
      <p>isConnected: {isConnected ? "true" : "false"}</p>
      <p>isSpeaking: {isSpeaking ? "true" : "false"}</p>
      <div className="w-96 h-96 border overflow-y-scroll p-4">
        {transcript.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "text-right" : "text-left"}>
            <strong>{msg.role === "user" ? "User" : "Assistant"}:</strong> {msg.text}
          </p>
        ))}
      </div>
    </div>
  );
}
