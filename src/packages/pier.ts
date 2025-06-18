/**
 * **pier** - A Linux script management CLI written in Rust
 *
 * @domain `crates.io/pier`
 * @programs `pier`
 * @version `0.1.6` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pier.md
 *
 * @install `sh <(curl https://pkgx.sh) pier`
 * @name `pier`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pier
 * // Or access via domain
 * const samePkg = pantry.cratesiopier
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pier"
 * console.log(pkg.description) // "A Linux script management CLI written in Rust"
 * console.log(pkg.programs)    // ["pier"]
 * console.log(pkg.versions[0]) // "0.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pier.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pierPackage = {
  /**
   * The display name of this package.
   */
  name: 'pier' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pier' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A Linux script management CLI written in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pier/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pier' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pier',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.6',
    '0.1.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/pier' as const,
}

export type PierPackage = typeof pierPackage
