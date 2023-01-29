// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/shadesOfPurple");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "구르미 도서관",
    tagline:
        "구르미들이 읽은 책을 문서화하고 공유할 수 있는 도서관을 만들어 나갑니다.",
    url: "https://goormy-docusaurus-library.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    onDuplicateRoutes: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "goormy", // Usually your GitHub org/user name.
    projectName: "docusaurus-library", // Usually your repo name.
    deploymentBranch: "gh-pages",
    githubHost: "github.com",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "kr",
        locales: ["en", "kr"],
        path: "i18n",
        localeConfigs: {
            en: {
                htmlLang: "en-US",
            },
            ko: {
                htmlLang: "ko-KR",
            },
        },
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                debug: process.env.NODE_ENV !== "production",
                sitemap: {
                    changefreq: "weekly",
                    priority: 0.5,
                    ignorePatterns: ["/tags/**"],
                    filename: "sitemap.xml",
                },
                googleAnalytics: {
                    trackingID: "350619225",
                    anonymizeIP: true,
                },
                gtag: {
                    trackingID: "350619225",
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    plugins: [
        [
            "@docusaurus/plugin-ideal-image",
            {
                quality: 70,
                max: 1030,
                min: 640,
                steps: 2,
                disableInDev: false,
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: "img/docusaurus.png",
            navbar: {
                title: "Goormy 라이브러리",
                logo: {
                    alt: "Goormy 사이트 로고",
                    src: "img/logo-light.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Library",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/goormy/docusaurus-library",
                        label: "GitHub",
                        position: "right",
                    },
                ],
                hideOnScroll: false,
                style: "primary",
            },
            footer: {
                style: "dark",
                copyright: `Copyright © ${new Date().getFullYear()} Goormy, Built with Docusaurus.`,
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                defaultLanguage: "javascript",
            },
        }),
};

module.exports = config;
