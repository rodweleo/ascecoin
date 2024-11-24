
import Image from "next/image"
import { HowToBuyStepCard } from "./how-to-buy-step-card";
export function HowToBuySection() {
    const steps = [
        {
            title: "Connect Wallet",
            description: "To purchase ASCECOIN token you need to connect your wallet to our platform.",
        },
        {
            title: "Participate in Presale",
            description: "Visit our presale platform and follow the instructions to participate in ASCECOIN's token presale.",
        },
        {
            title: "Claim Tokens",
            description: "After the presale ends, you will be able to claim your Doge2014 tokens from your user dashboard.",
        },
    ]

    return (
        <section id="how-to-buy" className="bg-yellow-50 py-16 w-full">
            <div className="container mx-auto ">
                <h2 className="mb-12 text-center text-3xl font-bold">HOW TO BUY</h2>
                <div className="grid place-items-center w-full">
                    <div className="p-4">
                        <ul className="space-y-6">
                            {steps.map((step, index) => {
                                const { title, description } = step;

                                return (
                                    <li key={title}>
                                        <HowToBuyStepCard index={index} title={title} description={description} />
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="flex bg-red-400 hidden items-center justify-center">
                            <Image
                                src="/doge-coins.png"
                                alt="Doge with coins"
                                className=" rounded-lg shadow-lg"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

