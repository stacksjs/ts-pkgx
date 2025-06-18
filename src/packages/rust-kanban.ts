/**
 * **rust-kanban** - A kanban board for the terminal built with ❤️ in Rust
 *
 * @domain `crates.io/rust-kanban`
 * @programs `rust-kanban`
 * @version `0.10.5` (8 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rust-kanban.md
 *
 * @install `sh <(curl https://pkgx.sh) rust-kanban`
 * @name `rust-kanban`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rustkanban
 * // Or access via domain
 * const samePkg = pantry.cratesiorustkanban
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rust-kanban"
 * console.log(pkg.description) // "A kanban board for the terminal built with ❤️ i..."
 * console.log(pkg.programs)    // ["rust-kanban"]
 * console.log(pkg.versions[0]) // "0.10.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rust-kanban.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rustkanbanPackage = {
  /**
   * The display name of this package.
   */
  name: 'rust-kanban' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rust-kanban' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A kanban board for the terminal built with ❤️ in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/rust-kanban/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) rust-kanban' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rust-kanban',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.5',
    '0.10.4',
    '0.10.3',
    '0.10.2',
    '0.10.1',
    '0.10.0',
    '0.9.7',
    '0.9.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/rust-kanban' as const,
}

export type RustkanbanPackage = typeof rustkanbanPackage
