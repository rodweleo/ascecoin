"use client"

import FeatureCard from '@/components/ui/feature-card'
import Image from "next/image"
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const About = () => {

    useEffect(() => {
        document.title = "About ASCE - Empowering SMEs On-Chain"
    }, [])
    return (
        <div>
            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About ASCE
                    </motion.h1>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <p className="mb-4">
                                ASCE aims to revolutionize the way Small and Medium Enterprises (SMEs) operate by leveraging the power of blockchain technology. We&apos;re committed to providing a seamless, secure, and efficient platform that empowers businesses to thrive in the digital age.
                            </p>
                            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                            <p>
                                We envision a future where SMEs can easily harness the benefits of blockchain technology, streamlining their operations, reducing costs, and accessing new opportunities for growth and innovation.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Image src="/about-illustration.svg" alt="ASCE Vision" className="w-full rounded-lg shadow-lg" width={250} height={250} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon="💼"
                            title="SME-Focused"
                            description="Tailored solutions designed specifically for the needs of small and medium enterprises."
                        />
                        <FeatureCard
                            icon="⚡"
                            title="ICP Network"
                            description="Built on the Internet Computer Protocol for unparalleled speed and scalability."
                        />
                        <FeatureCard
                            icon="🔒"
                            title="Enhanced Security"
                            description="Leverage blockchain technology for secure and transparent business operations."
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-primary text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join the ASCE Revolution</h2>
                    <p className="text-xl mb-8">Be part of the future of SME operations and blockchain technology</p>
                    <Button className='bg-secondary hover:bg-black hover:text-primary transition-colors duration-300'>
                        <Link href="/community" >
                            Get Started
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}


export default About
