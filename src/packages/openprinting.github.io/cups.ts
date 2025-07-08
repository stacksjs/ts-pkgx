/**
 * **cups** - Package from pantry: openprinting.github.io/cups
 *
 * @domain `openprinting.github.io/cups`
 *
 * @install `launchpad install openprinting.github.io/cups`
 * @dependencies `kerberos.org`, `zlib.net`, `linux:openssl.org^1.1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openprintinggithubiocups
 * console.log(pkg.name)        // "cups"
 * console.log(pkg.description) // "Package from pantry: openprinting.github.io/cups"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openprinting-github-io/cups.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openprintinggithubiocupsPackage = {
  /**
   * The display name of this package.
   */
  name: 'cups' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openprinting.github.io/cups' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openprinting.github.io/cups' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openprinting.github.io/cups' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openprinting.github.io/cups -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openprinting.github.io/cups' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'kerberos.org',
    'zlib.net',
    'linux:openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openprinting.github.io/cups/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenprintinggithubiocupsPackage = typeof openprintinggithubiocupsPackage
