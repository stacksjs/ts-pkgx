/**
 * **dexios** - Package from pantry: brxken128.github.io/dexios
 *
 * @domain `brxken128.github.io/dexios`
 *
 * @install `launchpad install brxken128.github.io/dexios`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.brxken128githubiodexios
 * console.log(pkg.name)        // "dexios"
 * console.log(pkg.description) // "Package from pantry: brxken128.github.io/dexios"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/brxken128-github-io/dexios.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const brxken128githubiodexiosPackage = {
  /**
   * The display name of this package.
   */
  name: 'dexios' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'brxken128.github.io/dexios' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: brxken128.github.io/dexios' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install brxken128.github.io/dexios' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +brxken128.github.io/dexios -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install brxken128.github.io/dexios' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/brxken128.github.io/dexios/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Brxken128githubiodexiosPackage = typeof brxken128githubiodexiosPackage
