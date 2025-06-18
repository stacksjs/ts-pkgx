/**
 * **ctop** - Top-like interface for container metrics
 *
 * @domain `ctop.sh`
 * @programs `ctop`
 * @version `0.7.7` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/ctop-sh.md
 *
 * @install `sh <(curl https://pkgx.sh) ctop`
 * @name `ctop`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ctop
 * // Or access via domain
 * const samePkg = pantry.ctopsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ctop"
 * console.log(pkg.description) // "Top-like interface for container metrics"
 * console.log(pkg.programs)    // ["ctop"]
 * console.log(pkg.versions[0]) // "0.7.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ctop-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ctopPackage = {
  /**
   * The display name of this package.
   */
  name: 'ctop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ctop.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Top-like interface for container metrics' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ctop.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) ctop' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ctop',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'ctop.sh' as const,
}

export type CtopPackage = typeof ctopPackage
