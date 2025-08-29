"use client";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>app/web</p>
      <div className="max-w-sm w-full mx-auto">{JSON.stringify(users)}</div>
    </div>
  );
}
