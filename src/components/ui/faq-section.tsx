import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
    const faqs = [
        {
            question: "What is ASCECOIN?",
            answer: "ASCECOIN is a commemorative token celebrating 10 years of the Dogecoin community's journey.",
        },
        {
            question: "How can I participate in the ASCECOIN token presale?",
            answer: "You can participate by connecting your wallet and following the simple purchase process on our platform.",
        },
        {
            question: "What will staking cost?",
            answer: "Staking is a simple process where you lock your tokens to earn rewards. Gas fees apply for staking transactions.",
        },
        {
            question: "How do I contact the team?",
            answer: "You can reach our team through our official social media channels or community Discord server.",
        },
    ]

    return (
        <section className="py-16">
            <div className="container">
                <h2 className="mb-12 text-center text-3xl font-bold">ASCECOIN - FAQ</h2>
                <div className="mx-auto max-w-2xl p-4">
                    <Accordion type="single" collapsible>
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

