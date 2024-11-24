import Link from 'next/link'
import { SendIcon } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { Button } from './button'
import Image from "next/image"

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-yellow-50 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-[1px] sm:gap-0">
                        <Image src="/icons/ASCE_LOGO.png" alt="ASCECOIN" width={90} height={100} className='w-[25px] sm:w-[60px] sm:mb-1 sm drop-shadow-lg' />
                        <h3 className="text-2xl sm:text-7xl text-primary font-bold">SCE</h3>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-primary">About</Link></li>
                            <li><Link href="/tokenomics" className="text-gray-400 hover:text-primary">Tokenomics</Link></li>
                            <li><Link href="/roadmap" className="text-gray-400 hover:text-primary">Roadmap</Link></li>
                            <li><Link href="/community" className="text-gray-400 hover:text-primary">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                        <ul className="flex space-x-4">
                            <li><Button size="icon" variant="outline" className='font-semibold'><Link href="https://x.com/ascecoin" target='_blank' className='flex items-center gap-2.5'><FaXTwitter /></Link></Button></li>
                            <li><Button size="icon" variant="outline" className='font-semibold'><Link href="https://t.me/+2cXa5w0ZNP83YWE0" target='_blank' className='flex items-center gap-2.5'><SendIcon /></Link></Button></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-400 text-sm">Copyright © {currentYear} ASCE. All rights reserved.</p>
                    <p className="text-gray-400 text-xs mt-2">ASCE is a meme coin with utility, not financial advice.</p>
                </div>
            </div>
        </footer>
    )
}

