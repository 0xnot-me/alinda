import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]
    : []),
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Prefer CSP frame-ancestors over X-Frame-Options so IDX Broker can embed wrapper pages.
  // Do NOT send upgrade-insecure-requests in development — it breaks http://localhost CSS/JS.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://middleware.idxbroker.com https://mlspalmbeach.lindaolsson.com https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://mlspalmbeach.lindaolsson.com https://middleware.idxbroker.com",
      "img-src 'self' data: blob: https: http:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' ws: wss: http://127.0.0.1:* http://localhost:* https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://googleads.g.doubleclick.net https://api.web3forms.com https://api.idxbroker.com https://mlspalmbeach.lindaolsson.com https://middleware.idxbroker.com https://cdn.photos.sparkplatform.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
      "frame-src 'self' https://mlspalmbeach.lindaolsson.com https://middleware.idxbroker.com https://www.googletagmanager.com https://www.google.com",
      "media-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://api.web3forms.com",
      "frame-ancestors 'self' https://*.idxbroker.com https://mlspalmbeach.lindaolsson.com",
      ...(isProd ? ["upgrade-insecure-requests"] : []),
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  images: {
    // AVIF via sharp can fail to render in some local/browser combos; WebP is enough here.
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.photos.sparkplatform.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mlspalmbeach.lindaolsson.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "middleware.idxbroker.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/video.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/idx-wrapper/mls-search",
        destination: "/idx-wrapper/mls-search",
      },
      {
        source: "/idx-wrapper/mls-search/",
        destination: "/idx-wrapper/mls-search",
      },
    ];
  },
};

export default nextConfig;
