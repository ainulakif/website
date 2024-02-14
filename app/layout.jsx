import { Analytics } from "@vercel/analytics/react";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
    title: "Website | Powered by Vercel | Learn Next.js",
    description: "This website is powered by Vercel. Use it to learn Next.js and build efficient web applications.",
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/images/icon-fav.png" sizes="any" />
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