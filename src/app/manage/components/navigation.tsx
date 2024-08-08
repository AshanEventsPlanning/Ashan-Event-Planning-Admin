"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {UserButton} from "@clerk/nextjs";
import EventSeatIcon from '@mui/icons-material/EventSeat';
import LayersIcon from '@mui/icons-material/Layers';
import TableBarIcon from '@mui/icons-material/TableBar';
import GroupIcon from '@mui/icons-material/Group';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
function Navigation() {
    return (
        <div className="border-r min-h-screen flex flex-col justify-between">
            <div>
                <h2 className="p-2">Ashan Event Planning</h2>
                <NavigationMenu orientation="vertical">
                    <NavigationMenuList asChild>
                        <ul className="flex flex-col items-stretch py-4 pl-4 gap-y-2 space-x-0">
                            <NavigationMenuItem>
                                <Link href="/manage/chairs" legacyBehavior passHref>
                                    <NavigationMenuLink style={{width:'100%', display:'flex', justifyContent:'flex-start'}} className={navigationMenuTriggerStyle()}>
                                        <EventSeatIcon sx={{marginRight:'1rem'}}/>
                                        Chairs</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/manage/tables" legacyBehavior passHref>
                                    <NavigationMenuLink  style={{width:'100%', display:'flex', justifyContent:'flex-start'}} className={navigationMenuTriggerStyle()}>
                                        <TableBarIcon sx={{marginRight:'1rem'}}/>
                                        Tables</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/manage/arrangements" legacyBehavior passHref>
                                    <NavigationMenuLink style={{width:'100%', display:'flex', justifyContent:'flex-start'}} className={navigationMenuTriggerStyle()}>
                                        <LayersIcon sx={{marginRight:'1rem'}}/>
                                        Arrangements</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/manage/orders" legacyBehavior passHref>
                                    <NavigationMenuLink style={{width:'100%', display:'flex', justifyContent:'flex-start'}} className={navigationMenuTriggerStyle()}>
                                        <ViewWeekIcon sx={{marginRight:'1rem'}}/>
                                        Orders</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/manage/user" legacyBehavior passHref>
                                    <NavigationMenuLink style={{width:'100%', display:'flex', justifyContent:'flex-start'}} className={navigationMenuTriggerStyle()}>
                                        <GroupIcon sx={{marginRight:'1rem'}}/>
                                        Users</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </ul>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className={"px-8 py-4"}>
                <UserButton/>
            </div>
        </div>
    );
}

export default Navigation;
