/**
 * **diskonaut** - Package from pantry: crates.io/diskonaut
 *
 * @domain `crates.io/diskonaut`
 *
 * @install `launchpad install crates.io/diskonaut`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiodiskonaut
 * console.log(pkg.name)        // "diskonaut"
 * console.log(pkg.description) // "Package from pantry: crates.io/diskonaut"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/diskonaut.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiodiskonautPackage = {
  /**
   * The display name of this package.
   */
  name: 'diskonaut' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/diskonaut' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/diskonaut' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/diskonaut' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/diskonaut -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/diskonaut' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/diskonaut/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiodiskonautPackage = typeof cratesiodiskonautPackage
