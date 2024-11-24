import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SocialLinkCardProps {
    icon: ReactNode
    title: string
    description: string
    link: string
}
export default function SocialLinkCard({ icon, title, description, link }: SocialLinkCardProps) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 space-y-2.5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-primary flex items-center gap-2">
                {icon}
                <h3 className="text-xl font-semibold tracking-widest">{title}</h3>
            </div>

            <p className="text-gray-600">{description}</p>
        </motion.a>
    )
}