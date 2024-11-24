"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon, SendIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaXTwitter } from "react-icons/fa6"

interface MobileNavProps {
    links: {
        href: string;
        label: string;
    }[]
}
export function MobileNav({ links }: MobileNavProps) {
    const pathName = usePathname()
    const currentYear = new Date().getFullYear()
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon />
            </SheetTrigger>
            <SheetContent className="bg-yellow-50 flex flex-col h-full justify-between">
                <div className="space-y-5">
                    <SheetHeader className="text-left sticky top-0">
                        <SheetTitle className="text-primary">ASCECOIN</SheetTitle>
                        <SheetDescription>
                            THE MEMECOIN THAT MEANS BUSINESS!
                        </SheetDescription>
                    </SheetHeader>

                    <ul className="flex flex-col gap-5 ">
                        {
                            links.map((navLink) => {
                                return (
                                    <li key={navLink.label}>
                                        <SheetClose asChild>
                                            <Link href={navLink.href} className={` hover:text-primary ${pathName.startsWith(navLink.href.toLowerCase()) ? "text-primary" : "text-gray-600 "}`}>{navLink.label}</Link>
                                        </SheetClose>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <SheetFooter>
                    <div className="space-y-2">
                        <ul className="flex gap-5">
                            <li><button className='font-semibold'><Link href="https://t.me/+2cXa5w0ZNP83YWE0" target='_blank' className='flex items-center gap-2.5'><SendIcon size={18} /></Link></button></li>
                            <li><button className='font-semibold'><Link href="https://x.com/ascecoin" target='_blank' className='flex items-center gap-2.5'><FaXTwitter size={18} /></Link></button></li>
                        </ul>
                        <p className="text-sm">Copyright {currentYear}. All Right Reserved</p>
                    </div>
                </SheetFooter>
            </SheetContent>

        </Sheet >
    )
}
