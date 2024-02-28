import { Analytics } from "@vercel/analytics/react";

import JsonLd from "@components/JsonLd";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
    title: {
        template: "%s | Powered by Vercel | Learn Next.js",
        default: "Website | Powered by Vercel | Learn Next.js"
    },
    description: "This website is powered by Vercel. Use it to learn Next.js and build efficient web applications.",
    keywords: ['Next.js', 'React', 'JavaScript'],
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/images/icon-fav.png" sizes="32x32" />
                <JsonLd />
            </head>
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Nav />
                        {children}
                        <Analytics />
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;