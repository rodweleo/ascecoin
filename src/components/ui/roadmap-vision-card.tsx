import { motion } from "framer-motion";

interface RoadmapVisionCardProps {
    icon: string
    title: string
    description: string
}
export default function RoadmapVisionCard({ icon, title, description }: RoadmapVisionCardProps) {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    )
}