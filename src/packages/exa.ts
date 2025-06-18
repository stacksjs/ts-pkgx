/**
 * **exa** - A modern replacement for ‘ls’.
 *
 * @domain `crates.io/exa`
 * @programs `exa`
 * @version `0.10.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/exa.md
 *
 * @install `sh <(curl https://pkgx.sh) exa`
 * @name `exa`
 * @dependencies `darwinzlib.net^1`, `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.exa
 * // Or access via domain
 * const samePkg = pantry.cratesioexa
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "exa"
 * console.log(pkg.description) // "A modern replacement for ‘ls’."
 * console.log(pkg.programs)    // ["exa"]
 * console.log(pkg.versions[0]) // "0.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/exa.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const exaPackage = {
  /**
   * The display name of this package.
   */
  name: 'exa' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/exa' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A modern replacement for ‘ls’.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/exa/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) exa' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'exa',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'darwinzlib.net^1',
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/exa' as const,
}

export type ExaPackage = typeof exaPackage
