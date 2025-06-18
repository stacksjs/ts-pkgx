/**
 * **blowfish** - blowfish is a command line interface for interacting with DMTF Redfish and SNIA Swordfish enabled devices based on gofish
 *
 * @domain `github.com/matoszz/blowfish`
 * @programs `blowfish`
 * @version `0.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) blowfish`
 * @name `blowfish`
 * @aliases `matoszz/blowfish`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.blowfish
 * // Or access via domain
 * const samePkg = pantry.githubcommatoszzblowfish
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "blowfish"
 * console.log(pkg.description) // "blowfish is a command line interface for intera..."
 * console.log(pkg.programs)    // ["blowfish"]
 * console.log(pkg.versions[0]) // "0.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/matoszz/blowfish.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const blowfishPackage = {
  /**
   * The display name of this package.
   */
  name: 'blowfish' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/matoszz/blowfish' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'blowfish is a command line interface for interacting with DMTF Redfish and SNIA Swordfish enabled devices based on gofish' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/matoszz/blowfish/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) blowfish' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'blowfish',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'matoszz/blowfish',
  ] as const,
  fullPath: 'github.com/matoszz/blowfish' as const,
}

export type BlowfishPackage = typeof blowfishPackage
