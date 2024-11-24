import FeatureCard from '@/components/ui/feature-card'
import { Separator } from '@/components/ui/separator'
import { FEATURES } from '@/utils/data'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const Tokenomics = () => {
    const tokenAllocation = [
        { name: 'Public Sale', value: 40 },
        { name: 'Team & Advisors', value: 20 },
        { name: 'Ecosystem & Development', value: 25 },
        { name: 'Reserve', value: 15 },
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

    return (
        <div>
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Tokenomics
                    </motion.h1>
                    <div className="grid grid-cols-1 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-semibold mb-4">Token Distribution</h2>
                            <p className="mb-4">
                                The ASCE token is designed to create a sustainable ecosystem that benefits all participants. Our token distribution strategy ensures a fair allocation among various stakeholders.
                            </p>
                            <div className="grid lg:grid-cols-2 gap-10 w-full">
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={tokenAllocation}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {tokenAllocation.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>

                                <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg w-full">
                                    <div className="mb-4">
                                        <div className="text-lg font-semibold text-primary">100 BILLION TOKENS</div>
                                        <div className="text-sm text-gray-600">TOTAL SUPPLY</div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="text-lg font-semibold text-primary">0.0000145 USD</div>
                                        <div className="text-sm text-gray-600">LISTING PRICE</div>
                                    </div>
                                    <Separator />
                                    <div className="space-y-2">
                                        {tokenAllocation.map((allocation, i) => (
                                            <div key={i} className="flex justify-between">
                                                <p className={`font-medium text-[${COLORS[i]}]`}>{allocation.name}</p>
                                                <span className="font-bold">{allocation.value} %</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-semibold mb-4">Token Utility</h2>
                            <ul className="space-y-4 list-disc">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span><strong>Governance:</strong> ASCE token holders can participate in decision-making processes for the platform&apos;s future development.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span><strong>Rewards:</strong> Users can earn ASCE tokens by contributing to the ecosystem, such as providing liquidity or referring new users.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span><strong>Payments:</strong> ASCE tokens can be used for transactions within the platform, including paying for services and fees.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span><strong>Staking:</strong> Users can stake their ASCE tokens to earn additional rewards and participate in network security.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div >
            </section >

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Tokenomics Highlights</h2>
                    <ul className="grid md:grid-cols-3 gap-8">
                        {
                            FEATURES.map((feature) => {
                                const { title, description } = feature;
                                return <li key={title}>
                                    <FeatureCard
                                        icon=""
                                        title={title}
                                        description={description}
                                    />
                                </li>
                            })
                        }

                    </ul>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Join the ASCE Ecosystem?</h2>
                    <p className="text-xl mb-8">Start your journey with ASCE tokens and empower your business</p>
                    <a href="#" className="bg-primary text-white px-6 py-3 font-semibold text-lg transition duration-300">
                        Buy ASCE Tokens
                    </a>
                </div>
            </section>
        </div >
    )
}



export default Tokenomics
