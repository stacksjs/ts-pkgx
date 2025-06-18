/**
 * **crates.io/get-blessed** - pkgx package
 *
 * @domain `crates.io/get/blessed`
 *
 * @install `pkgx crates.io/get-blessed`
 * @name `get-blessed`
 * @aliases `crates.io/get-blessed`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiogetblessed
 * // Or access via domain
 * const samePkg = pantry.cratesiogetblessed
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "get-blessed"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/get/blessed.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogetblessedPackage = {
  /**
   * The display name of this package.
   */
  name: 'get-blessed' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/get/blessed' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io/get-blessed' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/get-blessed',
  ] as const,
  fullPath: 'crates.io/get-blessed' as const,
}

export type CratesiogetblessedPackage = typeof cratesiogetblessedPackage
