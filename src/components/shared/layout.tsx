import { ReactNode } from 'react';
import SideNav from "./sidenav";
import './layout.css'

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='layout'>
      <SideNav />
      {children}
    </div>
  );
}

export default Layout;
