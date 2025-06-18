/**
 * **julia** - The Julia Programming Language
 *
 * @domain `julialang.org`
 * @programs `julia`
 * @version `1.11.5` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) julia`
 * @name `julia`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.julia
 * // Or access via domain
 * const samePkg = pantry.julialangorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "julia"
 * console.log(pkg.description) // "The Julia Programming Language"
 * console.log(pkg.programs)    // ["julia"]
 * console.log(pkg.versions[0]) // "1.11.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/julialang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const juliaPackage = {
  /**
   * The display name of this package.
   */
  name: 'julia' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'julialang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Julia Programming Language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/julialang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) julia' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'julia',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.11.5',
    '1.11.4',
    '1.11.3',
    '1.11.2',
    '1.11.1',
    '1.11.0',
    '1.10.9',
    '1.10.8',
    '1.10.7',
    '1.10.6',
    '1.10.5',
    '1.10.4',
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.4',
    '1.9.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'julia' as const,
}

export type JuliaPackage = typeof juliaPackage
