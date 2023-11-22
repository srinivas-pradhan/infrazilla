'use client';

import { useState } from 'react';
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



const NavBar = () => {
    const [menuOpen, setmenuOpen] = useState(false);

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
                                <NavigationMenuContent>1</NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="font-mono bg-slate-200 hover:bg-slate-100 text-gray-600 hover:text-gray-900 text-md">Github</NavigationMenuTrigger>
                                <NavigationMenuContent></NavigationMenuContent>
                            </NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className="cursor-pointer font-mono text-gray-600 hover:text-gray-900 text-md">
                                    Documentation
                                </NavigationMenuLink>
                            </Link>
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
