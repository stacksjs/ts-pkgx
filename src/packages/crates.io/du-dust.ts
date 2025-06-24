/**
 * **du-dust** - Package from pantry: crates.io/du-dust
 *
 * @domain `crates.io/du-dust`
 *
 * @install `launchpad install crates.io/du-dust`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiodudust
 * console.log(pkg.name)        // "du-dust"
 * console.log(pkg.description) // "Package from pantry: crates.io/du-dust"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/du-dust.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiodudustPackage = {
  /**
   * The display name of this package.
   */
  name: 'du-dust' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/du-dust' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/du-dust' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/du-dust' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/du-dust -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/du-dust' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/du-dust/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiodudustPackage = typeof cratesiodudustPackage
