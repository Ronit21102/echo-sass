"use client";
import { Button } from "@workspace/ui/components/button";
import { add } from "@workspace/math/add";
import { Input } from "@workspace/ui/components/input";
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>app/web</p>
          <UserButton></UserButton>
          <Button onClick={() => addUser()}>Add User</Button>
          <div className="max-w-sm w-full mx-auto">{JSON.stringify(users)}</div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Must be signed in to view this content </p>
        <SignInButton>Sign in:</SignInButton>
      </Unauthenticated>
    </>
  );
}
