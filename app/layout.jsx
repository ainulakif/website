import { Analytics } from "@vercel/analytics/*";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
    title: "Website",
    description: "Ainul Akif's website"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
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