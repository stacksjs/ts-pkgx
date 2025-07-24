/**
 * **mdcat** - Package from pantry: crates.io/mdcat
 *
 * @domain `crates.io/mdcat`
 *
 * @install `launchpad install crates.io/mdcat`
 * @dependencies `openssl.org^1.1`, `curl.se^8 # since 2.7.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiomdcat
 * console.log(pkg.name)        // "mdcat"
 * console.log(pkg.description) // "Package from pantry: crates.io/mdcat"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/mdcat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiomdcatPackage = {
  /**
   * The display name of this package.
   */
  name: 'mdcat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/mdcat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/mdcat' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/mdcat' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/mdcat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/mdcat' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'curl.se^8 # since 2.7.0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/mdcat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiomdcatPackage = typeof cratesiomdcatPackage
