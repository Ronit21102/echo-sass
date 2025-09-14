"use client";

import { SignInView } from "@/modules/auth/ui/views/sign-in";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { AuthLayout } from "@/modules/auth/ui/layout/auth-layout";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <div>Loading...</div>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SignInView />
        </AuthLayout>
      </Unauthenticated>
    </>
  );
};
