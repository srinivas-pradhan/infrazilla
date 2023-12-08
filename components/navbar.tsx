'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

import useAppModal from "@/hooks/use-ddb-modal";

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

import { Button } from "@/components/ui/button"

import { Services } from '@/utils/usernav';
import App from "next/app";

interface NavBarProps {
    width_div?: string;
    navbarstyle?: string;
    navbarspacing?: string;
    navbaritemstyle?: string;
    logo_styling?: string;
    dropdown?: string;
    dropdown_menustyling?: string;
    useraccountstyle?: string;
}

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

const NavBar:React.FC<NavBarProps> = ({
    width_div,
    navbarstyle,
    logo_styling,
    dropdown,
    navbarspacing,
    dropdown_menustyling,
    navbaritemstyle,
    useraccountstyle
}) => {
    const AppModal = useAppModal();
    const [menuOpen, setmenuOpen] = React.useState(false);

    const  handleNav = () => {
        setmenuOpen(!menuOpen)
    }
    return (
        <div className={cn("", width_div)}>
            <div className={cn("", navbarstyle)}>
                <a href="/" className="cursor-pointer">
                    <span className={cn("",logo_styling)}>
                        InfraZilla
                    </span>
                </a>
                <div className={cn("", dropdown)}>
                    <NavigationMenu>
                        <NavigationMenuList className={cn("", navbarspacing)}>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={cn("", dropdown_menustyling)}>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="bg-slate-200 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {/* {Services.map((service) => (
                                        <ListItem
                                            key={service.title}
                                            title={service.title}
                                            onClick={AppModal.onOpen}
                                            >
                                            {service.description}
                                        </ListItem>
                                    ))} */}
                                    <ListItem
                                        key="AWS Lambda"
                                        title="AWS Lambda"
                                        onClick={AppModal.onOpen}
                                    >
                                        Run code without thinking about servers.
                                    </ListItem>
                                    <ListItem
                                        key="AWS Secrets Manager"
                                        title="AWS Secrets Manager"
                                        onClick={AppModal.onOpen}
                                    >
                                        AWS Secrets Manager helps you to securely encrypt, store, and retrieve credentials for your databases and other services.
                                    </ListItem>
                                    <ListItem
                                        key="AWS Key Management Service"
                                        title="AWS Key Management Service"
                                        onClick={AppModal.onOpen}
                                    >
                                        AWS Key Management Service (AWS KMS) is an encryption and key management service scaled for the cloud.
                                    </ListItem>
                                    <ListItem
                                        key="AWS Simple Notification Service"
                                        title="AWS Simple Notification Service"
                                        onClick={AppModal.onOpen}
                                    >
                                        Fully managed Pub/Sub service for A2A and A2P messaging.
                                    </ListItem>
                                    <ListItem
                                        key="AWS DynamoDB"
                                        title="AWS DynamoDB"
                                        onClick={AppModal.onOpen}
                                    >
                                        Managed NoSQL database service.
                                    </ListItem>
                                    {/* <ListItem
                                        key="AWS Account Onboarding"
                                        title="AWS Account Onboarding"
                                        onClick={AppModal.onOpen}
                                    >
                                        Pre-cursor step - Needed to use this platform.
                                    </ListItem> */}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <Link href="/faqs" legacyBehavior passHref>
                                <NavigationMenuLink className={cn("", navbaritemstyle)}>
                                    FAQs
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/feedback" legacyBehavior passHref>
                                <NavigationMenuLink className={cn("", navbaritemstyle)}>
                                    Feedback
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/infra" legacyBehavior passHref>
                                <NavigationMenuLink className={cn("", navbaritemstyle)}>
                                    My Infrastructure
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className={cn("",useraccountstyle)}>
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
