import type { HeadConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'

import viteConfig from './vite.config'

// https://vitepress.dev/reference/site-config

const analyticsHead: HeadConfig[] = [
  [
    'script',
    {
      'src': 'https://cdn.usefathom.com/script.js',
      'data-site': 'OEVBCRJL',
      'defer': '',
    },
  ],
]

const nav = [
  { text: 'News', link: 'https://stacksjs.org/news' },
  {
    text: 'Changelog',
    link: 'https://github.com/stacksjs/ts-pkgx/blob/main/CHANGELOG.md',
  },
  // { text: 'Blog', link: 'https://updates.ow3.org' },
  {
    text: 'Resources',
    items: [
      { text: 'Team', link: '/team' },
      { text: 'Sponsors', link: '/sponsors' },
      { text: 'Partners', link: '/partners' },
      { text: 'Postcardware', link: '/postcardware' },
      { text: 'License', link: '/license' },
      {
        items: [
          {
            text: 'Awesome Stacks',
            link: 'https://github.com/stacksjs/awesome-stacks',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/stacksjs/stacks/blob/main/.github/CONTRIBUTING.md',
          },
        ],
      },
    ],
  },
]

const sidebar = [
  {
    text: 'Get Started',
    items: [
      { text: 'Introduction', link: '/intro' },
      { text: 'Installation', link: '/install' },
      { text: 'Usage', link: '/usage' },
      { text: 'Configuration', link: '/config' },
    ],
  },
  {
    text: 'Features',
    items: [
      { text: 'Package Discovery', link: '/features/discovery' },
      { text: 'TypeScript Integration', link: '/features/typescript' },
      { text: 'Package Management', link: '/features/management' },
      { text: 'Domain Handling', link: '/features/domains' },
      { text: 'CLI Tools', link: '/features/cli' },
      { text: 'Batch Processing', link: '/features/batch-processing' },
      { text: 'Multiple Package Fetching', link: '/features/multiple-fetching' },
    ],
  },
  {
    text: 'Advanced',
    items: [
      { text: 'Custom Transformations', link: '/advanced/transformations' },
      { text: 'Custom Output Formats', link: '/advanced/output-formats' },
      { text: 'Extending Aliases', link: '/advanced/aliases' },
      { text: 'Error Handling', link: '/advanced/error-handling' },
      { text: 'GitHub API Rate Limits', link: '/advanced/rate-limits' },
      { text: 'Optimized Batch Processing', link: '/advanced/batch-processing' },
      { text: 'Maintenance & Troubleshooting', link: '/maintenance' },
    ],
  },
  {
    text: 'Reference',
    items: [
      { text: 'CLI Reference', link: '/cli-reference' },
      { text: 'API Reference', link: '/api-reference' },
      { text: 'Package Catalog', link: '/package-catalog' },
    ],
  },
]
const description = 'TypeScript library for fetching and working with pkgx.dev package information'
const title = 'ts-pkgx | Package info fetcher for pkgx.dev'

export default withPwa(
  defineConfig({
    lang: 'en-US',
    title: 'ts-pkgx',
    description,
    metaChunk: true,
    cleanUrls: true,
    lastUpdated: true,

    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: './images/logo-mini.svg' }],
      ['link', { rel: 'icon', type: 'image/png', href: './images/logo.png' }],
      ['meta', { name: 'theme-color', content: '#0A0ABC' }],
      ['meta', { name: 'title', content: title }],
      ['meta', { name: 'description', content: description }],
      ['meta', { name: 'author', content: 'Stacks.js, Inc.' }],
      ['meta', {
        name: 'tags',
        content: 'ts-pkgx, stacksjs, pkgx.dev, package manager, typescript, library',
      }],

      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'en' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],

      ['meta', { property: 'og:site_name', content: 'ts-pkgx' }],
      ['meta', { property: 'og:image', content: './images/og-image.jpg' }],
      ['meta', { property: 'og:url', content: 'https://ts-pkgx.stacksjs.org/' }],
      // ['script', { 'src': 'https://cdn.usefathom.com/script.js', 'data-site': '', 'data-spa': 'auto', 'defer': '' }],
      ...analyticsHead,
    ],

    themeConfig: {
      search: {
        provider: 'local',
      },
      logo: {
        light: './images/logo-transparent.svg',
        dark: './images/logo-white-transparent.svg',
      },

      nav,
      sidebar,

      editLink: {
        pattern: 'https://github.com/stacksjs/ts-pkgx/edit/main/docs/docs/:path',
        text: 'Edit this page on GitHub',
      },

      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2025-present Stacks.js, Inc.',
      },

      socialLinks: [
        { icon: 'twitter', link: 'https://twitter.com/stacksjs' },
        { icon: 'bluesky', link: 'https://bsky.app/profile/chrisbreuer.dev' },
        { icon: 'github', link: 'https://github.com/stacksjs/ts-pkgx' },
        { icon: 'discord', link: 'https://discord.gg/stacksjs' },
      ],

      // algolia: services.algolia,

      // carbonAds: {
      //   code: '',
      //   placement: '',
      // },
    },

    pwa: {
      manifest: {
        theme_color: '#0A0ABC',
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB limit instead of default 2MB
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
    },

    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },

      codeTransformers: [
        transformerTwoslash(),
      ],
    },

    vite: viteConfig,
  }),
)
