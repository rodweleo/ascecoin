import { Button } from '@/components/ui/button'
import { ASCECOIN_CONTRACT_ADDRESS } from '@/utils/data'
import { CopyIcon, GiftIcon } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="py-20 relative">
            <div className="container z-50 mx-auto px-4 flex flex-wrap justify-between items-center">
                <div className="w-full lg:w-2/4 space-y-5">
                    <h1 className="text-4xl sm:text-8xl font-bold text-black text-border-slate-500">Welcome to <span className="text-primary">ASCECOIN</span></h1>
                    <p className="text-sm sm:text-md text-slate-700">ASCECOIN is a digital currency that streamlines your SME operations meaning Business! Created as a fun an innovative project, ASCECOIN brings together the best of both worlds for a unique and exciting Web3 experience.</p>
                    <div className="flex flex-wrap gap-5">
                        <Button size="lg" className='font-semibold'>$ GET ASCECOIN</Button>
                        <Button size="lg" className='font-semibold bg-white border-2 border-black'><GiftIcon /> GET AIRDROP</Button>
                    </div>

                    <div className='bg-primary/50 px-4 py-6 space-y-2 '>
                        <h2 className='font-bold'>CONTRACT ADDRESS</h2>
                        <div className='grid lg:grid-cols-2 grid-cols-1 justify-between gap-5 w-full'>
                            <p className='w-full break-words'>{ASCECOIN_CONTRACT_ADDRESS} </p>
                            <button className="w-fit flex items-center gap-2.5 bg-primary drop-shadow-lg hover:-translate-y-1 transition-all duration-100 px-4 py-2"><span>Copy</span><CopyIcon size={14} /></button>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block relative">
                    <Image
                        src="/images/ascecoin_chill_guy.png"
                        alt="ASCE Mascot"
                        width={400}
                        height={400}
                        className=""
                    />

                    <div className="absolute -top-4 -right-28 bg-white px-4 py-6 rounded-t-3xl rounded-br-3xl">
                        <p>Just a chill guy enjoying ASCECOIN</p>
                    </div>

                </div>

            </div>

            <Image src="/icons/ASCE_LOGO.png" alt="ASCECOIN" width={500} height={100} className='w-[100px] lg:w-[500px] absolute top-1/4 right-1/4 -rotate-45 opacity-20 drop-shadow-xl' />
        </section>
    )
}

