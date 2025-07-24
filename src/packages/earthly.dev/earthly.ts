/**
 * **earthly** - Super simple build framework with fast, repeatable builds and an instantly familiar syntax – like Dockerfile and Makefile had a baby.
 *
 * @domain `earthly.dev/earthly`
 * @programs `earthly`
 * @version `0.8.16` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install earthly`
 * @name `earthly`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.earthly
 * // Or access via domain
 * const samePkg = pantry.earthlydevearthly
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "earthly"
 * console.log(pkg.description) // "Super simple build framework with fast, repeata..."
 * console.log(pkg.programs)    // ["earthly"]
 * console.log(pkg.versions[0]) // "0.8.16" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/earthly-dev/earthly.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const earthlyPackage = {
  /**
   * The display name of this package.
   */
  name: 'earthly' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'earthly.dev/earthly' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Super simple build framework with fast, repeatable builds and an instantly familiar syntax – like Dockerfile and Makefile had a baby.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/earthly.dev/earthly/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install earthly' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'earthly',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.16',
    '0.8.15',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) earthly -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install earthly' as const,
}

export type EarthlyPackage = typeof earthlyPackage
