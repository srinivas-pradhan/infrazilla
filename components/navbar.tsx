'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

import { UserButton } from "@clerk/nextjs";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu";

import Link from "next/link";

import { Services, Documentation} from '@/utils/usernav';


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
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const NavBar = () => {
    const [menuOpen, setmenuOpen] = React.useState(false);

    const  handleNav = () => {
        setmenuOpen(!menuOpen)
    }
    return (
        <div className="w-full">
            <div className="bg-slate-200 shadow-sm flex h-16 items-center px-8">
                <a href="/" className="cursor-pointer">
                    <span className="font-mono text-2xl font-semibold scale-150">
                        InfraZilla
                    </span>
                </a>
                <div className="ml-auto flex flex-row items-center">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-5">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="font-mono bg-slate-200 hover:bg-slate-100 text-gray-600 hover:text-gray-900 text-md">Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="bg-slate-200 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {Services.map((service) => (
                                        <ListItem
                                            key={service.title}
                                            title={service.title}
                                            href={service.href}
                                            >
                                            {service.description}
                                        </ListItem>
                                    ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="font-mono bg-slate-200 hover:bg-slate-100 text-gray-600 hover:text-gray-900 text-md">Documentation</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="bg-slate-200 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {Documentation.map((doc) => (
                                        <ListItem
                                            key={doc.title}
                                            title={doc.title}
                                            href={doc.href}
                                            >
                                            {doc.description}
                                        </ListItem>
                                    ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <Link href="/faqs" legacyBehavior passHref>
                                <NavigationMenuLink className="cursor-pointer font-mono text-gray-600 hover:text-gray-900 text-md">
                                    FAQs
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/feedback" legacyBehavior passHref>
                                <NavigationMenuLink className="cursor-pointer font-mono text-gray-600 hover:text-gray-900 text-md">
                                    Feedback
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/infra" legacyBehavior passHref>
                                <NavigationMenuLink className="cursor-pointer font-mono text-gray-600 hover:text-gray-900 text-md">
                                    My Infrastructure
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="ml-auto flex items-center space-x-4 scale-150">
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
