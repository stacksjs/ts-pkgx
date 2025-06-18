/**
 * **hyperfine** - A command-line benchmarking tool
 *
 * @domain `crates.io/hyperfine`
 * @programs `hyperfine`
 * @version `1.19.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) hyperfine`
 * @name `hyperfine`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hyperfine
 * // Or access via domain
 * const samePkg = pantry.cratesiohyperfine
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hyperfine"
 * console.log(pkg.description) // "A command-line benchmarking tool"
 * console.log(pkg.programs)    // ["hyperfine"]
 * console.log(pkg.versions[0]) // "1.19.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/hyperfine.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hyperfinePackage = {
  /**
   * The display name of this package.
   */
  name: 'hyperfine' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/hyperfine' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A command-line benchmarking tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/hyperfine/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) hyperfine' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hyperfine',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.19.0',
    '1.18.0',
    '1.17.0',
    '1.16.1',
    '1.16.0',
    '1.15.0',
    '0.17.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/hyperfine' as const,
}

export type HyperfinePackage = typeof hyperfinePackage
