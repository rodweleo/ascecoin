"use client"

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ASCE_SOCIAL_LINKS } from '@/utils/data'
import SocialLinkCard from '@/components/ui/social-link-card'
import EventCard from '@/components/ui/event-card'


const Community = () => {

    useEffect(() => {
        document.title = "ASCE Community - Join Our Blockchain Revolution"
    }, [])



    return (
        <div >
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Join the ASCE Community
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8 text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Connect with like-minded individuals, stay updated on the latest developments, and help shape the future of blockchain for SMEs.
                    </motion.p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Connect With Us</h2>
                    <ul className="flex flex-wrap items-center gap-8">
                        {
                            ASCE_SOCIAL_LINKS.map((socialLink) => {
                                const { icon, title, description, link } = socialLink
                                return (
                                    <li key={socialLink.title}>
                                        <SocialLinkCard
                                            icon={icon}
                                            title={title}
                                            description={description}
                                            link={link}
                                        />
                                    </li>
                                )
                            })
                        }


                    </ul>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Community Events</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <EventCard
                            title="ASCE Monthly Meetup"
                            date="Every last Thursday"
                            description="Join us for our monthly virtual meetup to discuss the latest in ASCE development and blockchain technology."
                        />
                        <EventCard
                            title="Blockchain for SMEs Webinar"
                            date="Quarterly"
                            description="Learn how SMEs can leverage blockchain technology to streamline operations and reduce costs."
                        />
                        <EventCard
                            title="ASCE Hackathon"
                            date="Annually"
                            description="Participate in our annual hackathon to build innovative solutions using ASCE technology."
                        />
                    </div>
                </div>
            </section>


        </div>
    )
}




export default Community

