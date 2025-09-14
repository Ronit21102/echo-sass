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
import { OrganizationSwitcher, SignInButton, UserButton } from "@clerk/nextjs";
export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <p>app/web</p>
        <UserButton></UserButton>
        <OrganizationSwitcher hidePersonal={true} />
        <Button className="cursor-pointer" onClick={() => addUser()}>Add User</Button>
      </div>
      <p>Must be signed in to view this content </p>
      <SignInButton>Sign in:</SignInButton>
    </>
  );
}
