"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { MoonStar, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function AppBar() {
  const { theme, setTheme } = useTheme();
  const navItems = [
    {
      name: "Home",
      link: "#header",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  //   const theme =
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className=" flex pr-4 items-center justify-between">
        {/* Desktop Navigation */}
        <div className="sr-only lg:not-sr-only">
          <NavbarLogo />
        </div>

        <NavBody className="border">
          <NavItems items={navItems} />
        </NavBody>

        {theme === "light" ? (
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setTheme("dark")}
            className="cursor-pointer size-8 sr-only lg:not-sr-only "
          >
            <MoonStar />
          </Button>
        ) : (
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setTheme("light")}
            className="cursor-pointer size-8 sr-only lg:not-sr-only "
          >
            <Sun />
          </Button>
        )}
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full  items-center justify-center  ">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="size-8  transition-transform duration-300 ease-in-out rotate-360"
              >
                <span
                  className={`cursor-pointer transition-transform duration-1000 ease-in-out ${
                    theme === "light" ? "rotate-0" : "rotate-380"
                  }`}
                >
                  {theme === "light" ? <MoonStar /> : <Sun />}
                </span>
              </Button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
