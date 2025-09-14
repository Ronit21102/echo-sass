import { AuthGuard } from "@/components/auth-guard";
import { OrganizationGuard } from "@/components/organiztion-guard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthGuard>
  );
};

export default Layout;
