/**
 * **parallel** - Shell command parallelization utility
 *
 * @domain `gnu.org/parallel`
 * @programs `env_parallel`, `niceload`, `parallel`, `parcat`, `parset`, ... (+3 more)
 * @version `20250522.0.0` (17 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/parallel.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/parallel -- $SHELL -i`
 * @aliases `parallel`
 * @dependencies `perl.org@5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.parallel
 * // Or access via domain
 * const samePkg = pantry.gnuorgparallel
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/parallel"
 * console.log(pkg.description) // "Shell command parallelization utility"
 * console.log(pkg.programs)    // ["env_parallel", "niceload", ...]
 * console.log(pkg.versions[0]) // "20250522.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/parallel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const parallelPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/parallel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/parallel' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Shell command parallelization utility' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/parallel/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/parallel -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'env_parallel',
    'niceload',
    'parallel',
    'parcat',
    'parset',
    'parsort',
    'sem',
    'sql',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org@5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20250522.0.0',
    '20250422.0.0',
    '20250322.0.0',
    '20250222.0.0',
    '20250122.0.0',
    '20241222.0.0',
    '20241122.0.0',
    '20241022.0.0',
    '20240922.0.0',
    '20240822.0.0',
    '20240722.0.0',
    '20240622.0.0',
    '20240522.0.0',
    '20240422.0.0',
    '20240322.0.0',
    '20240222.0.0',
    '20240122.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'parallel',
  ] as const,
  fullPath: 'gnu.org/parallel' as const,
}

export type ParallelPackage = typeof parallelPackage
