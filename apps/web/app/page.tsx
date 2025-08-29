"use client";
import { Button } from "@workspace/ui/components/button";
import { add } from "@workspace/math/add";
import { Input } from "@workspace/ui/components/input";
import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>app/web</p>
      <Button onClick={() => addUser()}>Add User</Button>
      <div className="max-w-sm w-full mx-auto">{JSON.stringify(users)}</div>
    </div>
  );
}
