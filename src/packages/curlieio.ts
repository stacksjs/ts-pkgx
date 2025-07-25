/**
 * **curlie** - The power of curl, the ease of use of httpie.
 *
 * @domain `curlie.io`
 * @programs `curlie`
 * @version `1.8.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install curlie`
 * @name `curlie`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.curlie
 * // Or access via domain
 * const samePkg = pantry.curlieio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "curlie"
 * console.log(pkg.description) // "The power of curl, the ease of use of httpie."
 * console.log(pkg.programs)    // ["curlie"]
 * console.log(pkg.versions[0]) // "1.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curlie-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const curliePackage = {
  /**
   * The display name of this package.
   */
  name: 'curlie' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curlie.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The power of curl, the ease of use of httpie.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/curlie.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/rs/curlie' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install curlie' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'curlie',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.2',
    '1.7.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) curlie -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install curlie' as const,
}

export type CurliePackage = typeof curliePackage
