/**
 * **gost3411-2012** - GOST R 34.11-2012: RFC-6986 cryptographic hash function
 *
 * @domain `github.com/adegtyarev/streebog`
 * @programs `gost3411-2012`
 * @version `0.13.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gost3411-2012`
 * @aliases `gost3411-2012`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gost34112012
 * // Or access via domain
 * const samePkg = pantry.githubcomadegtyarevstreebog
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "streebog"
 * console.log(pkg.description) // "GOST R 34.11-2012: RFC-6986 cryptographic hash ..."
 * console.log(pkg.programs)    // ["gost3411-2012"]
 * console.log(pkg.versions[0]) // "0.13.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adegtyarev/streebog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gost34112012Package = {
  /**
   * The display name of this package.
   */
  name: 'streebog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adegtyarev/streebog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GOST R 34.11-2012: RFC-6986 cryptographic hash function' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adegtyarev/streebog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gost3411-2012' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gost3411-2012',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gost3411-2012',
  ] as const,
}

export type Gost34112012Package = typeof gost34112012Package
