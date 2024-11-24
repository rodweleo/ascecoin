
"use client"

import RoadmapItemCard from '@/components/ui/roadmap-item-card'
import RoadmapVisionCard from '@/components/ui/roadmap-vision-card'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from "next/link"

export default function Roadmap() {
    const roadmapItems = [
        {
            quarter: 'Q2 2024',
            title: 'Project Launch',
            items: [
                'Token Generation Event',
                'Website Launch',
                'Community Building Initiatives',
            ],
        },
        {
            quarter: 'Q3 2024',
            title: 'Platform Development',
            items: [
                'Beta Version of ASCE Platform',
                'Integration with ICP Network',
                'Smart Contract Audits',
            ],
        },
        {
            quarter: 'Q4 2024',
            title: 'Ecosystem Expansion',
            items: [
                'Launch of ASCE Mainnet',
                'Partnership Announcements',
                'Staking Program Implementation',
            ],
        },
        {
            quarter: 'Q1 2025',
            title: 'Advanced Features',
            items: [
                'Governance Portal Launch',
                'Cross-chain Interoperability',
                'Mobile App Release',
            ],
        },
    ]

    const visionItems = [
        {
            icon: "🌍",
            title: "Global Expansion",
            description: "Extend ASCE's reach to SMEs worldwide, fostering international business growth."
        },
        {
            icon: "🤝",
            title: "Strategic Partnerships",
            description: "Collaborate with major players in finance and technology to enhance our ecosystem."
        },
        {
            icon: "🔬",
            title: "Continuous Innovation",
            description: "Invest in R&D to stay at the forefront of blockchain technology for SMEs."
        }
    ]

    useEffect(() => {
        document.title = "ASCE Roadmap - Our Journey and Milestones"
    }, [])


    return (
        <div >
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl font-bold mb-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        ASCE Roadmap
                    </motion.h1>
                    <p className="text-xl text-center mb-12">
                        Our journey to revolutionize SME operations through blockchain technology
                    </p>
                    <div className="space-y-12">
                        {roadmapItems.map((item, index) => (
                            <RoadmapItemCard key={index} {...item} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Us on This Exciting Journey</h2>
                    <p className="text-xl mb-8">Be part of the ASCE revolution and help shape the future of SME blockchain solutions</p>
                    <Button>
                        <Link href="/community" className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-lg transition duration-300">
                            Join Our Community
                        </Link>
                    </Button>
                </div>
            </section>


            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Vision Beyond 2025</h2>
                    <ul className="grid md:grid-cols-3 gap-8">
                        {visionItems.map((vision) => {
                            const { icon, title, description } = vision;
                            return (
                                <li key={title}>
                                    <RoadmapVisionCard
                                        icon={icon}
                                        title={title}
                                        description={description}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </div>
    )
}

