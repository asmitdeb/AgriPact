import { useState } from "react";
import {
  HandCoinsIcon,
  Handshake,
  Home,
  Search,
  Settings,
  Menu,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "./ProfileDropdown";
import Logo from "./Logo";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Create Offer",
    url: "/offer/new",
    icon: HandCoinsIcon,
  },
  {
    title: "Negotiations",
    url: "/negotiations",
    icon: Handshake,
  },
  {
    title: "Contracts",
    url: "/contracts",
    icon: Handshake,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
  return [
    "w-full flex items-center gap-3 p-2 rounded-md transition-colors",
    isActive ? "bg-green-800 text-white" : "text-gray-500 hover:bg-gray-100",
  ].join(" ");
};

export function AppSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu trigger */}
      <div className="md:hidden fixed top-0 left-0 z-20 m-4">
        <Button variant="outline" size="icon" onClick={toggleMobileMenu}>
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Sidebar */}
      <Sidebar
        className={`bg-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        collapsible="icon"
        variant="sidebar"
      >
        <div className="flex items-center justify-center h-16 bg-[#224422] text-white">
          <Logo />
        </div>
        <SidebarContent className="relative">
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className={getLinkClassName}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="bg-gray-300 h-[1px] w-full my-2"></div>
              <ProfileDropdown />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
}
