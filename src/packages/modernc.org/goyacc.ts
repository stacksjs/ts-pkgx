/**
 * **goyacc** - Parser Generator for Go
 *
 * @domain `modernc.org/goyacc`
 * @programs `goyacc`
 * @version `1.0.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install goyacc`
 * @name `goyacc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.goyacc
 * // Or access via domain
 * const samePkg = pantry.moderncorggoyacc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "goyacc"
 * console.log(pkg.description) // "Parser Generator for Go"
 * console.log(pkg.programs)    // ["goyacc"]
 * console.log(pkg.versions[0]) // "1.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/modernc-org/goyacc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const goyaccPackage = {
  /**
   * The display name of this package.
   */
  name: 'goyacc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'modernc.org/goyacc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Parser Generator for Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/modernc.org/goyacc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install goyacc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'goyacc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GoyaccPackage = typeof goyaccPackage
