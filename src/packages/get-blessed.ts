/**
 * **get-blessed** - Terminal tool to get you the best crates for your rust projects, curated by blessed.rs
 *
 * @domain `crates.io/get-blessed`
 * @programs `get-blessed`
 * @version `0.2.1` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/get-blessed.md
 *
 * @install `sh <(curl https://pkgx.sh) get-blessed`
 * @name `get-blessed`
 * @dependencies `linuxopenssl.org`, `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.getblessed
 * // Or access via domain
 * const samePkg = pantry.cratesiogetblessed
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "get-blessed"
 * console.log(pkg.description) // "Terminal tool to get you the best crates for yo..."
 * console.log(pkg.programs)    // ["get-blessed"]
 * console.log(pkg.versions[0]) // "0.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/get-blessed.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getblessedPackage = {
  /**
   * The display name of this package.
   */
  name: 'get-blessed' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/get-blessed' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terminal tool to get you the best crates for your rust projects, curated by blessed.rs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/get-blessed/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) get-blessed' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'get-blessed',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxopenssl.org',
    'openssl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.1',
    '0.2.0',
    '0.1.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/get-blessed' as const,
}

export type GetblessedPackage = typeof getblessedPackage
