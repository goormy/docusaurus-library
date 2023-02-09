// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/shadesOfPurple");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Goormy 라이브러리",
    tagline: "구르미들이 알게 된 것을 서로 공유하는 공간입니다.",
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
                        label: "튜토리얼",
                    },
                    {
                        type: "dropdown",
                        // 숫자 접두사를 사용하여 폴더를 생성하면 정렬이 됩니다.
                        // ex) docs/books/01-이펙티브-타입스크립트/01-chapter/01.md는 아래와 같습니다.
                        // docId: "books/이펙티브-타입스크립트/chapter-01/01",
                        items: [
                            {
                                type: "docSidebar",
                                sidebarId: "merryBooksSidebar",
                                label: "merry",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "irangBooksSidebar",
                                label: "irang",
                            },
                        ],
                        position: "left",
                        label: "도서관",
                    },
                    {
                        type: "doc",
                        docId: "lectures/얄팍한-코딩사전/제대로-파는-HTML-CSS/chapter-01/01",
                        position: "left",
                        label: "강의",
                    },
                    { to: "/blog", label: "블로그", position: "left" },
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
