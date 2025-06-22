/**
 * **tabiew** - Package from pantry: crates.io/tabiew
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
 * console.log(pkg.description) // "Package from pantry: crates.io/tabiew"
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
  description: 'Package from pantry: crates.io/tabiew' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/tabiew' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/tabiew -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/tabiew' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/tabiew/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiotabiewPackage = typeof cratesiotabiewPackage
