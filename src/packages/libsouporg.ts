/**
 * **libsoup.org** - pkgx package
 *
 * @domain `libsoup.org`
 * @version `3.6.5` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install libsoup.org`
 * @dependencies `gnome.org/glib-networking`, `gnutls.org`, `rockdaboot.github.io/libpsl`, ... (+7 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsouporg
 * console.log(pkg.name)        // "libsoup.org"
 * console.log(pkg.versions[0]) // "3.6.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libsoup-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsouporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsoup.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libsoup.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libsoup.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libsoup.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnome.org/glib-networking',
    'gnutls.org',
    'rockdaboot.github.io/libpsl',
    'kerberos.org',
    'gnome.org/libxml2',
    'sqlite.org',
    'nghttp2.org',
    'linux:gnu.org/gettext',
    'linux:gnome.org/glib',
    'linux:github.com/google/brotli',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.5',
    '3.6.4',
    '3.6.3',
    '3.6.1',
    '3.6.0',
    '3.5.2',
    '3.5.1',
    '3.4.5',
    '3.4.4',
    '3.2.3',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libsoup.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libsoup.org' as const,
}

export type LibsouporgPackage = typeof libsouporgPackage
