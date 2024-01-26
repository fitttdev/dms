import { ReactNode } from 'react';
import Footer from "./footer";
import Sidebar from "./sidebar";

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
