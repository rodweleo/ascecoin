import React from "react";
import Footer from "./footer";
import Header from "./header";

interface RootLayoutProps {
    children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
    return (

        <div className="min-h-screen bg-yellow-100">

            <Header />
            <main>

                {children}
            </main>
            <Footer />

        </div>


    )
}