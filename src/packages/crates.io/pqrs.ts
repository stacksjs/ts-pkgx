/**
 * **pqrs** - Package from pantry: crates.io/pqrs
 *
 * @domain `crates.io/pqrs`
 *
 * @install `launchpad install crates.io/pqrs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiopqrs
 * console.log(pkg.name)        // "pqrs"
 * console.log(pkg.description) // "Package from pantry: crates.io/pqrs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pqrs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiopqrsPackage = {
  /**
   * The display name of this package.
   */
  name: 'pqrs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pqrs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/pqrs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/pqrs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/pqrs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/pqrs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pqrs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiopqrsPackage = typeof cratesiopqrsPackage
