/**
 * **README.rst** - pkgx package
 *
 * @domain `cmake.org/README.rst`
 *
 * @install `pkgx cmake.org/README.rst`
 * @name `README.rst`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.READMErst
 * // Or access via domain
 * const samePkg = pantry.cmakeorgreadmerst
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "README.rst"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cmake-org/README-rst.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rEADMErstPackage = {
  /**
   * The display name of this package.
   */
  name: 'README.rst' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cmake.org/README.rst' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cmake.org/README.rst' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'cmake.org/README.rst' as const,
}

export type READMErstPackage = typeof rEADMErstPackage
