/**
 * **tabiew** - pkgx package
 *
 * @domain `crates.io/tabiew`
 *
 * @install `launchpad install crates.io/tabiew`
 * @dependencies `linux:openssl.org` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotabiew
 * console.log(pkg.name)        // "tabiew"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tabiew.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotabiewPackage = {
  /**
   * The display name of this package.
   */
  name: 'tabiew' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tabiew' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/tabiew' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:openssl.org',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/tabiew -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/tabiew' as const,
}

export type CratesiotabiewPackage = typeof cratesiotabiewPackage
