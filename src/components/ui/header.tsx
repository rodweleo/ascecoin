"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToogleBtn } from './theme-toggle-btn'
import { usePathname } from 'next/navigation'
import { SendIcon } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image"
import { useWindowDimension } from './use-window-dimensions'
import { MobileNav } from './mobile-nav'

export default function Header() {
    const pathName = usePathname();
    const { isMobile } = useWindowDimension()
    const navLinks = [
        {
            href: "/about",
            label: "About"
        },
        {
            href: "/tokenomics",
            label: "Tokenomics"
        },
        {
            href: "/roadmap",
            label: "Roadmap"
        },
        {
            href: "/community",
            label: "Community"
        }
    ]

    return (
        <header className="bg-yellow-50 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2.5">
                    <Image src="/icons/ASCE_LOGO.png" alt="ASCECOIN" width={25} height={100} className='' />
                    <span>ASCE</span>
                </Link>
                {isMobile ? <MobileNav links={navLinks} /> :
                    <>
                        <nav>
                            <ul className="flex space-x-10">
                                {
                                    navLinks.map((navLink) => {
                                        return (
                                            <li key={navLink.label}><Link href={navLink.href} className={` hover:text-primary ${pathName.startsWith(navLink.href.toLowerCase()) ? "text-primary" : "text-gray-600 "}`}>{navLink.label}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        <ul className="flex items-center gap-5">
                            <li><Button variant="outline" className='font-semibold'><Link href="https://t.me/+2cXa5w0ZNP83YWE0" target='_blank' className='flex items-center gap-2.5'><SendIcon /> TELEGRAM</Link></Button></li>
                            <li><Button size="icon" variant="outline" className='font-semibold'><Link href="https://x.com/ascecoin" target='_blank' className='flex items-center gap-2.5'><FaXTwitter /></Link></Button></li>
                            <li><Button size="lg" className='font-semibold'>$ GET ASCECOIN</Button></li>
                            <li className="hidden"><Button variant="outline">Connect Wallet</Button></li>
                            <li className="hidden"><ThemeToogleBtn /></li>
                        </ul>
                    </>
                }
            </div>
        </header>
    )
}

