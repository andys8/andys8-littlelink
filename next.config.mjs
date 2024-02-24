/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 2 })
    );
    return config;
  },
};

export default nextConfig;
