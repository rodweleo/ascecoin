
interface HowToBuyStepCardProps {
    index: number
    title: string
    description: string
}

export function HowToBuyStepCard({ index, title, description }: HowToBuyStepCardProps) {
    return (
        <div key={index} className="bg-primary space-y-2.5 px-4 py-6 rounded-t-sm rounded-bl-2xl shadow-lg w-full max-w-lg">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold">{title}</h3>
                <div className="bg-white rounded-full flex items-center justify-center size-2 p-4 border border-black">
                    {index + 1}
                </div>
            </div>
            <p className="text-sm text-slate-600 font-normal">{description}</p>
        </div>
    )
}