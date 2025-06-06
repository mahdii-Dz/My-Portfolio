export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://mahdiiportfolio.netlify.app/sitemap.xml",
    };
}