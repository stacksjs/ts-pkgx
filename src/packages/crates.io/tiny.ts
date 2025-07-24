/**
 * **tiny** - Package from pantry: crates.io/tiny
 *
 * @domain `crates.io/tiny`
 *
 * @install `launchpad install crates.io/tiny`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotiny
 * console.log(pkg.name)        // "tiny"
 * console.log(pkg.description) // "Package from pantry: crates.io/tiny"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tiny.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotinyPackage = {
  /**
   * The display name of this package.
   */
  name: 'tiny' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tiny' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/tiny' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/tiny' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/tiny -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/tiny' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/tiny/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiotinyPackage = typeof cratesiotinyPackage
