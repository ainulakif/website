/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['lh3.googleusercontent.com'],
    // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.googleusercontent.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         appDir: true,
//         serverComponentsExternalPackages: ["mongoose"],
//     },
//     images: {
//         domains: ['lh3.googleusercontent.com'],
//     },
//     webpack(config) {
//         config.experiments = {
//             ...config.experiments,
//             topLevelAwait: true,
//         }
//         return config
//     }
// }

// module.exports = nextConfig
// export default nextConfig;