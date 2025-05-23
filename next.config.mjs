import { ProxyAgent } from "undici";

// 开发环境设置代理
if (process.env.NODE_ENV === "development") {
  const proxyAgent = new ProxyAgent("http://127.0.0.1:7890/");
  
  // 定义需要代理的域名 - 只保留必要的域名
  const PROXY_DOMAINS = [
    "oauth2.googleapis.com",
    "openidconnect.googleapis.com",
    "lh3.googleusercontent.com",
    "r2.cloudflarestorage.com",
    "github.com",
    "api.github.com"
  ];

  const originalFetch = global.fetch;
  
  // 优化的 fetch 覆盖函数
  global.fetch = function(url, opts = {}) {
    // 提取 URL 字符串 - 使用更简洁的方式
    const urlStr = url instanceof Request ? url.url : 
                  url instanceof URL ? url.toString() : 
                  String(url);
    
    // 检查是否需要代理
    const needsProxy = PROXY_DOMAINS.some(domain => urlStr.includes(domain));

    const timestamp = new Date().toISOString().split('T')[1].split('.')[0]; // 只显示时:分:秒
    
    // 只在需要时添加代理
    if (needsProxy) {
      console.log(`[${timestamp}] 🔀 Proxied: ${urlStr}`);
      opts.dispatcher = proxyAgent;
    } else {
      console.log(`[${timestamp}] ⚡ Direct: ${urlStr}`);
    }
    
    // 使用 try-catch 确保错误被正确处理
    try {
      return originalFetch(url, opts);
    } catch (error) {
      console.error(`Fetch error for ${urlStr}:`, error);
      throw error;
    }
  };
  
  console.log("✅ Proxy setup completed for Google OAuth");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  serverExternalPackages: ["@aws-sdk/s3-request-presigner"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
