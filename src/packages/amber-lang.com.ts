/**
 * **amber** - Crystal web framework. Bare metal performance, productivity and happiness
 *
 * @domain `amber-lang.com`
 * @programs `amber`
 * @version `0.4.0` (6 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/amber-lang-com.md
 * @install `sh <(curl https://pkgx.sh) amber`
 * @companions `gnu.org/bc`, `gnu.org/sed`, `gnu.org/coreutils`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.amber-langcom
 * console.log(pkg.name)        // "amber"
 * console.log(pkg.description) // "Crystal web framework. Bare metal performance, ..."
 * console.log(pkg.programs)    // ["amber"]
 * console.log(pkg.versions[0]) // "0.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/amber-lang-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const amberlangcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'amber' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'amber-lang.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crystal web framework. Bare metal performance, productivity and happiness' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/amber-lang.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) amber' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'amber',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'gnu.org/bc',
    'gnu.org/sed',
    'gnu.org/coreutils',
    'gnu.org/gawk',
    'gnu.org/bash',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.0',
    '0.3.5',
    '0.3.4',
    '0.3.3',
    '0.3.2',
    '0.3.1',
  ] as const,
  fullPath: 'amber-lang.com' as const,
  aliases: [] as const,
}

export type AmberlangcomPackage = typeof amberlangcomPackage
