/**
 * Generated from pkgx.dev data
 */
export const libsouporgPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "gnome.org/glib-networking",
    "gnutls.org",
    "rockdaboot.github.io/libpsl",
    "kerberos.org",
    "gnome.org/libxml2",
    "sqlite.org",
    "nghttp2.org",
    "linuxgnu.org/gettextgnome.org/glibgithub.com/google/brotli",
    "gnu.org/gettext",
    "gnome.org/glib",
    "github.com/google/brotli",
  ] as const,
  versions: [
    "3.6.5",
    "3.6.4",
    "3.6.3",
    "3.6.1",
    "3.6.0",
    "3.5.2",
    "3.5.1",
    "3.4.5",
    "3.4.4",
    "3.2.3",
  ] as const,
  name: "libsoup.org" as const,
  domain: "libsoup.org" as const,
  description: "Package information for libsoup.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libsoup.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libsoup.org -- $SHELL -i" as const,
}

export type LibsouporgPackage = typeof libsouporgPackage
