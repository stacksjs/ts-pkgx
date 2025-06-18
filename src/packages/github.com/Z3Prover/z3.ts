/**
 * **z3** - High-performance theorem prover
 *
 * @domain `github.com/Z3Prover/z3`
 * @programs `z3`
 * @version `4.15.1` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install z3`
 * @name `z3`
 * @dependencies `gnu.org/gcc/libstdcxx@14`, `cmake.org^3`, `python.org>=3<3.12`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.z3
 * // Or access via domain
 * const samePkg = pantry.githubcomz3proverz3
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "z3"
 * console.log(pkg.description) // "High-performance theorem prover"
 * console.log(pkg.programs)    // ["z3"]
 * console.log(pkg.versions[0]) // "4.15.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Z3Prover/z3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const z3Package = {
  /**
   * The display name of this package.
   */
  name: 'z3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Z3Prover/z3' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'High-performance theorem prover' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Z3Prover/z3/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install z3' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'z3',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gcc/libstdcxx@14',
    'cmake.org^3',
    'python.org>=3<3.12',
    'gnu.org/gcc@14',
    'gnu.org/wget',
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.15.1',
    '4.15.0',
    '4.14.1',
    '4.14.0',
    '4.13.4',
    '4.13.3',
    '4.13.2',
    '4.13.0',
    '4.12.6',
    '4.12.5',
    '4.12.4',
    '4.12.3',
    '4.12.2',
    '4.12.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type Z3Package = typeof z3Package
