import { motion } from "framer-motion";

interface RoadmapItemCardProps {
    quarter: string
    title: string
    items: string[]
    index: number
}
export default function RoadmapItemCard({ quarter, title, items, index }: RoadmapItemCardProps) {
    return (
        <motion.div
            className="flex items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="flex-shrink-0 w-24 py-2 text-center">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-semibold">
                    {index + 1}
                </span>
            </div>
            <div className="flex-grow pb-8 border-l-2 border-primary pl-8 ml-4">
                <div className="flex items-center mb-2">
                    <div className="bg-primary rounded-full h-4 w-4 absolute -left-2 border-4 border-white"></div>
                    <span className="text-sm font-semibold text-primary">{quarter}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <ul className="list-disc list-inside space-y-2">
                    {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600">{item}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}