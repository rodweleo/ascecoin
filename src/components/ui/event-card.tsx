import { motion } from "framer-motion";

interface EventCardProps {
    title: string
    date: string
    description: string
}
export default function EventCard({ title, date, description }: EventCardProps) {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-500 mb-4">{date}</p>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    )
}