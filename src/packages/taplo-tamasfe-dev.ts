/**
 * **taplo** - A TOML toolkit written in Rust
 *
 * @domain `taplo.tamasfe.dev`
 * @programs `taplo`
 * @version `0.10.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) taplo`
 * @name `taplo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.taplo
 * // Or access via domain
 * const samePkg = pantry.taplotamasfedev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "taplo"
 * console.log(pkg.description) // "A TOML toolkit written in Rust"
 * console.log(pkg.programs)    // ["taplo"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taplo-tamasfe-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const taploPackage = {
  /**
   * The display name of this package.
   */
  name: 'taplo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taplo.tamasfe.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A TOML toolkit written in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/taplo.tamasfe.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) taplo' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'taplo',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
    '0.9.3',
    '0.9.2',
    '0.8.1',
    '0.7.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'taplo.tamasfe.dev' as const,
}

export type TaploPackage = typeof taploPackage
