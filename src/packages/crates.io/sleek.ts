/**
 * **sleek** - Package from pantry: crates.io/sleek
 *
 * @domain `crates.io/sleek`
 *
 * @install `launchpad install crates.io/sleek`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosleek
 * console.log(pkg.name)        // "sleek"
 * console.log(pkg.description) // "Package from pantry: crates.io/sleek"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sleek.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosleekPackage = {
  /**
   * The display name of this package.
   */
  name: 'sleek' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sleek' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/sleek' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/sleek' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/sleek -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/sleek' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/sleek/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiosleekPackage = typeof cratesiosleekPackage
