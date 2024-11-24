import { Github, SendIcon } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6"

export const FEATURES = [
    {
        title: "Total Supply",
        description: "1,000,000,000 ASCE tokens"
    },
    {
        title: "Token Burning",
        description: "Regular token burning events to maintain scarcity"
    },
    {
        title: "Deflationary Model",
        description: "Designed to increase value over time"
    }
]

export const ASCE_SOCIAL_LINKS = [
    {
        icon: <FaXTwitter size={20} />,
        title: "Twitter",
        description: "Follow us for the latest updates and announcements",
        link: "https://x.com/ascecoin"
    },
    {
        icon: <SendIcon size={20} />,
        title: "Telegram",
        description: "Stay connected with our global community",
        link: "https://t.me/ascecoin"
    }, {
        icon: <Github size={20} />,
        title: "GitHub",
        description: "Contribute to our open-source projects",
        link: "https://github.com/ascecoin"
    }
]

export const ASCECOIN_CONTRACT_ADDRESS: string = "51ca91848db36e6588ecc8bbb491b7ba8ffb39c41b07f9b0874cc2c8b2966809";