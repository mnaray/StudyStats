// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "StudyStats",
    tagline: "",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://mnaray.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/StudyStats/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "mnaray", // Usually your GitHub org/user name.
    projectName: "StudyStats", // Usually your repo name.
    trailingSlash: false, // Enables the default trailing slash.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"]
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
                    editUrl: "https://github.com/mnaray/StudyStats/edit/main/docs/"
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/logo.svg",
            navbar: {
                title: "StudyStats",
                logo: {
                    alt: "Flag",
                    src: "img/logo.svg"
                },
                items: [
                    {
                        type: "doc",
                        docId: "Documentation",
                        position: "left",
                        label: "Documentation"
                    },
                    {
                        type: "doc",
                        docId: "Instructions",
                        position: "left",
                        label: "Instructions"
                    },
                    {
                        href: "https://github.com/mnaray/StudyStats",
                        label: "GitHub",
                        position: "right"
                    }
                ]
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Documentation",
                        items: [
                            {
                                label: "Documentation",
                                to: "/docs/Documentation"
                            },
                            {
                                label: "Instructions",
                                to: "/docs/Instructions"
                            }
                        ]
                    },
                    {
                        title: "GitHub Profiles",
                        items: [
                            {
                                label: "mnaray",
                                href: "https://github.com/mnaray/"
                            },
                            {
                                label: "Ellis Arn",
                                href: "https://github.com/EllisArn/"
                            },
                            {
                                label: "n¿co",
                                href: "https://github.com/h0peRL/"
                            }
                        ]
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Repository on GitHub",
                                href: "https://github.com/mnaray/StudyStats"
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} mnaray/StudyStats | Documentation made with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
};

module.exports = config;
