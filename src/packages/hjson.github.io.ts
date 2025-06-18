/**
 * **hjson** - Hjson for Rust
 *
 * @domain `hjson.github.io`
 * @programs `hjson`
 * @version `1.1.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/hjson-github-io.md
 *
 * @install `sh <(curl https://pkgx.sh) hjson`
 * @name `hjson`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hjson
 * // Or access via domain
 * const samePkg = pantry.hjsongithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hjson"
 * console.log(pkg.description) // "Hjson for Rust"
 * console.log(pkg.programs)    // ["hjson"]
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hjson-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hjsonPackage = {
  /**
   * The display name of this package.
   */
  name: 'hjson' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hjson.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Hjson for Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hjson.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) hjson' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hjson',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
    '1.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'hjson.github.io' as const,
}

export type HjsonPackage = typeof hjsonPackage
