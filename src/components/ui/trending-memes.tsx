import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TrendingMemes() {
    const memes = [
        { src: '/placeholder.svg?height=300&width=300', alt: 'ASCE Meme 1' },
        { src: '/placeholder.svg?height=300&width=300', alt: 'ASCE Meme 2' },
        { src: '/placeholder.svg?height=300&width=300', alt: 'ASCE Meme 3' },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Trending ASCE Memes</h2>
                <div className="relative">
                    <div className="flex overflow-x-auto space-x-4 pb-4">
                        {memes.map((meme, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Image
                                    src={meme.src}
                                    alt={meme.alt}
                                    width={300}
                                    height={300}
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                        <ChevronLeft className="h-6 w-6 text-gray-600" />
                    </button>
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                        <ChevronRight className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
                <div className="text-center mt-8">
                    <Button>Submit Your Meme</Button>
                </div>
            </div>
        </section>
    )
}

