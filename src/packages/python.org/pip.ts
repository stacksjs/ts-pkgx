/**
 * **pip** - pkgx package
 *
 * @domain `python.org/pip`
 *
 * @install `pkgx python.org/pip`
 * @name `pip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pip
 * // Or access via domain
 * const samePkg = pantry.pythonorgpip
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pip"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/python-org/pip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pipPackage = {
  /**
   * The display name of this package.
   */
  name: 'pip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'python.org/pip' as const,
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
  installCommand: 'pkgx python.org/pip' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'python.org/pip' as const,
}

export type PipPackage = typeof pipPackage
