import { AuthGuard } from "@/components/auth-guard";
import { OrganizationGuard } from "@/components/organiztion-guard";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { cookies } from "next/headers";
import { DashboardSidebar } from "../components/dashboard-sidebar";

export const DashboardLayout = async({
  children,
}: {
  children: React.ReactNode;
}) => {

    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_bar")?.value !== "true";
  return (
    <AuthGuard>
      <OrganizationGuard>
        <SidebarProvider defaultOpen={defaultOpen}>
            <DashboardSidebar/>
          <div className="flex flex-1 flex-col">{children}</div>
        </SidebarProvider>
      </OrganizationGuard>
    </AuthGuard>
  );
};
