/**
 * **wthrr** - 🌞 🦀 🌙 Weather companion for the terminal. Rust app.
 *
 * @domain `crates.io/wthrr`
 * @programs `wthrr`
 * @version `1.2.1` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/wthrr.md
 *
 * @install `sh <(curl https://pkgx.sh) wthrr`
 * @name `wthrr`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.wthrr
 * // Or access via domain
 * const samePkg = pantry.cratesiowthrr
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wthrr"
 * console.log(pkg.description) // "🌞 🦀 🌙 Weather companion for the terminal. Ru..."
 * console.log(pkg.programs)    // ["wthrr"]
 * console.log(pkg.versions[0]) // "1.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/wthrr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wthrrPackage = {
  /**
   * The display name of this package.
   */
  name: 'wthrr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/wthrr' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🌞 🦀 🌙 Weather companion for the terminal. Rust app.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/wthrr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) wthrr' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wthrr',
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
    '1.2.1',
    '1.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/wthrr' as const,
}

export type WthrrPackage = typeof wthrrPackage
