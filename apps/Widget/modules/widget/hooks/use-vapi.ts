import Vapi from "@vapi-ai/web";
import { useEffect, useState } from "react";

interface TranscriptMessage {
  role: "user" | "assistant";
  text: string;
}

export const useVapi = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);

  useEffect(() => {
    //testing custo
    const vapiInstance = new Vapi("9d8c2082-1631-48e7-9e34-bb3e8adef7e3");
    setVapi(vapiInstance);
    vapiInstance.on("call-start", () => {
      setIsConnected(true);
      setIsConnecting(false);

      setTranscript([]);
      console.log("Vapi connected");
    });

    vapiInstance.on("call-end", () => {
      setIsConnected(false);
      setIsConnecting(false);
      setIsSpeaking(false);
      console.log("Vapi disconnected");
    });

    vapiInstance.on("speech-start", () => {
      setIsSpeaking(true);
      console.log("Vapi speaking");
    });
    vapiInstance.on("speech-end", () => {
      setIsSpeaking(false);
      console.log("Vapi stopped speaking");
    });

    vapiInstance.on("error", () => {
      console.error("Vapi error");
      setIsConnecting(false);
    });

    vapiInstance.on("message", (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            role: message.role === "user" ? "user" : "assistant",
            text: message.transcript,
          },
        ]);
      }
    });
    return () => {
      vapiInstance?.stop();
    };
  }, []);

  const startCall = () => {
    setIsConnecting(true);
    if (vapi) {
      // only for testing
      vapi.start("134e80f4-9560-4359-8fd1-aeb6840e696e");
    }
  };
  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  }
};
