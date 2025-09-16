import { AuthGuard } from "@/components/auth-guard";
import { OrganizationGuard } from "@/components/organiztion-guard";
import { DashboardLayout } from "@/modules/dashboard/ui/layouts/dashboard-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
