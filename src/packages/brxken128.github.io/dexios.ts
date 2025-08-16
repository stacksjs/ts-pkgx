/**
 * **brxken128.github.io/dexios** - pkgx package
 *
 * @domain `brxken128.github.io/dexios`
 * @version `8.8.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install brxken128.github.io/dexios`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.brxken128githubiodexios
 * console.log(pkg.name)        // "brxken128.github.io/dexios"
 * console.log(pkg.versions[0]) // "8.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/brxken128-github-io/dexios.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const brxken128githubiodexiosPackage = {
  /**
   * The display name of this package.
   */
  name: 'brxken128.github.io/dexios' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'brxken128.github.io/dexios' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/brxken128.github.io/dexios/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install brxken128.github.io/dexios' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.8.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +brxken128.github.io/dexios -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install brxken128.github.io/dexios' as const,
}

export type Brxken128githubiodexiosPackage = typeof brxken128githubiodexiosPackage
