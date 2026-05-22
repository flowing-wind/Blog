import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://flowing-wind.space/",
    title: "Flowing Wind",
    description: "A blog maintained by Fuuraiko and Maxim.",
    author: "Fuuraiko and Maxim",
    profile: "https://flowing-wind.space/",
    ogImage: "Elaina.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/flowing-wind/Blog" },
    { name: "mail", url: "mailto:flowing-wind@outlook.com" },
  ],
  shareLinks: [],
});
