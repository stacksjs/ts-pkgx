---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ts-pkgx"
  text: "Package info fetcher for pkgx.dev"
  tagline: "Fetch and access package data from pkgx.dev with ease"
  image: /images/logo-white.png
  actions:
    - theme: brand
      text: Get Started
      link: /intro
    - theme: alt
      text: View on GitHub
      link: https://github.com/stacksjs/ts-pkgx

features:
  - title: "Package Discovery"
    icon: "🔍"
    details: "Discover and fetch package information from pkgx.dev programmatically."
  - title: "Type-Safe Access"
    icon: "🛡️"
    details: "Fully typed TypeScript interfaces for all package data with IntelliSense support."
  - title: "Multiple Package Fetching"
    icon: "📦"
    details: "Fetch multiple specific packages at once with the new --pkg option."
  - title: "Batch Processing"
    icon: "⚡"
    details: "Optimized batch processing for efficiently handling hundreds of packages."
  - title: "CLI Tools"
    icon: "🧰"
    details: "Command line tools for fetching package info directly in your terminal."
  - title: "Nested Path Support"
    icon: "📁"
    details: "Proper handling of nested package paths like agwa.name/git-crypt."
  - title: "Custom Output Formats"
    icon: "📄"
    details: "Generate documentation in various formats including Markdown, HTML, and CSV."
  - title: "Extensive Package Catalog"
    icon: "📚"
    details: "Access information on approximately 1,000 packages from the pkgx ecosystem."
---

<Home />
