// import { Zap, Award, Users } from 'lucide-react'
import FeatureCard from './feature-card'

export default function Features() {
  // const features = [
  //   {
  //     icon: <Zap className="h-10 w-10 text-yellow-500" />,
  //     title: 'Faster Transactions',
  //     description: 'Lightning-fast transactions for SMEs, powered by ICP network.'
  //   },
  //   {
  //     icon: <Award className="h-10 w-10 text-purple-500" />,
  //     title: 'Fun Rewards',
  //     description: 'Earn rewards for community engagement and meme creation.'
  //   },
  //   {
  //     icon: <Users className="h-10 w-10 text-green-500" />,
  //     title: 'Governance & Utility',
  //     description: 'Shape the future of ASCE and unlock powerful SME tools.'
  //   }
  // ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  )
}

