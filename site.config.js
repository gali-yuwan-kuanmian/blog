const CONFIG = {
  // profile setting (required)
  profile: {
    name: "gali.yuwan.kuanmian",
    image: "/self.jpeg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "",
    bio: "",
    email: "gali.yuwan.kuanmian@gmail.com",
    linkedin: "",
    github: "gali-yuwan-kuanmian",
    instagram: "",
  },
  projects: [
    {
      name: `gali-yuwan-kuanmian`,
      href: "https://gali-yuwan-kuanmian.github.io/gali-yuwan-kuanmian",
    },
  ],
  // blog setting (required)
  blog: {
    title: "RainSay",
    description: "welcome to RainSay!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://gali-yuwan-kuanmian.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId:process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "gali-yuwan-kuanmian/gali-yuwan-kuanmian",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
