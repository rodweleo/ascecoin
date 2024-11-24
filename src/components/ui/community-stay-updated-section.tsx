import { NewsletterSubForm } from "./newsletter-sub-form";

export function CommunityStayUpdatedSection() {
    return (
        <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Stay Updated</h2>
                <NewsletterSubForm />
            </div>
        </section>
    )
}