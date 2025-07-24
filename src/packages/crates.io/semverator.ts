/**
 * **semverator** - Package from pantry: crates.io/semverator
 *
 * @domain `crates.io/semverator`
 *
 * @install `launchpad install crates.io/semverator`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosemverator
 * console.log(pkg.name)        // "semverator"
 * console.log(pkg.description) // "Package from pantry: crates.io/semverator"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/semverator.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosemveratorPackage = {
  /**
   * The display name of this package.
   */
  name: 'semverator' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/semverator' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/semverator' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/semverator' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/semverator -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/semverator' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/semverator/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiosemveratorPackage = typeof cratesiosemveratorPackage
