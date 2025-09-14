"use client";

import { useOrganization } from "@clerk/nextjs";

import { AuthLayout } from "@/modules/auth/ui/layout/auth-layout";
import { OrgSelectView } from "@/modules/auth/ui/views/org-select-view";

export function OrganizationGuard({ children }: { children: React.ReactNode }) {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectView />
      </AuthLayout>
    );
  }

  return <>{children}</>;
}
