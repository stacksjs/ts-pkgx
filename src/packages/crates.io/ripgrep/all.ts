/**
 * **crates.io/ripgrep-all** - pkgx package
 *
 * @domain `crates.io/ripgrep/all`
 *
 * @install `pkgx crates.io/ripgrep-all`
 * @name `ripgrep-all`
 * @aliases `crates.io/ripgrep-all`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesioripgrepall
 * // Or access via domain
 * const samePkg = pantry.cratesioripgrepall
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ripgrep-all"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ripgrep/all.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioripgrepallPackage = {
  /**
   * The display name of this package.
   */
  name: 'ripgrep-all' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/ripgrep/all' as const,
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
  installCommand: 'pkgx crates.io/ripgrep-all' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/ripgrep-all',
  ] as const,
  fullPath: 'crates.io/ripgrep-all' as const,
}

export type CratesioripgrepallPackage = typeof cratesioripgrepallPackage
