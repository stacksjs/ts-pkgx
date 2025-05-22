/**
 * Generated from pkgx.dev data
 */
export const chromedriverchromiumorgPackage = {
  programs: [
    "chromedriver",
  ] as const,
  companions: [] as const,
  dependencies: [
    "linuxgnome.org/glib^2mozilla.org/nssx.org/xcb",
    "gnome.org/glib^2",
    "mozilla.org/nss",
    "x.org/xcb",
  ] as const,
  versions: [
    "114.0.5735.90",
  ] as const,
  name: "chromedriver.chromium.org" as const,
  domain: "chromedriver.chromium.org" as const,
  description: "Package information for chromedriver.chromium.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/chromedriver.chromium.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +chromedriver.chromium.org -- $SHELL -i" as const,
}

export type ChromedriverchromiumorgPackage = typeof chromedriverchromiumorgPackage
