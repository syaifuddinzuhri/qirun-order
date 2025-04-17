const appHead = {
  defaultTitle: "Ayam Bebek Qirun",
  titleTemplate: "Ayam Bebek Qirun - %s",
  openGraph: {
    title: "Ayam Bebek Qirun",
    description: "Ayam Bebek Qirun",
    locale: "en_US",
    site_name: "Ayam Bebek Qirun",
    url: "Ayam Bebek Qirun",
  },
  additionalMetaTags: [
    {
      name: "description",
      content: "Ayam Bebek Qirun",
    },
    { name: "theme-color", content: "#b59916" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "msapplication-navbutton-color", content: "#b59916" },
    { name: "format-detection", content: "telephone=no" },
    { name: "HandheldFriendly", content: "true" },
    { name: "robots", content: "noindex,follow" },
  ],
};

const today = new Date();

export { appHead, today };
