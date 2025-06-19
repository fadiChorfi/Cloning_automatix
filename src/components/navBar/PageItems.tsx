"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

const pages: { title: string; href: string }[] = [
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Term & Conditions",
    href: "/terms",
  },
  {
    title: "404",
    href: "/docs/primitives/404",
  },
];

const PageItems = () => {
  return (
    <NavigationMenu className="cursor-pointer">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white/80 text-[16px] font-sans hover:text-white transition-colors duration-200">
            Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#000000] border-white/15  border-1  rounded-lg shadow-lg">
            <ul className="grid w-[200px]  p-2 md:w-[250px] md:grid-cols-1 lg:w-[250px] ">
              {pages.map((item, index) => (
                <ListItem
                  key={index}
                  href={item.href}
                  className="text-white/75 hover:text-white text-[20px] block py-2 px-4 rounded-md transition-colors duration-200"
                >
                  {item.title}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default PageItems;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-2xl font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-lg leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
