// Separate JSON-LD component
const JsonLd = () => {
    const data = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Ainul Akif's Website",
        "url": "https://ainulakif-website.vercel.app"
    }
    return <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
};

export default JsonLd;