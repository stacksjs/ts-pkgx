/**
 * **crates.io/md-tui** - pkgx package
 *
 * @domain `crates.io/md/tui`
 *
 * @install `pkgx crates.io/md-tui`
 * @name `md-tui`
 * @aliases `crates.io/md-tui`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiomdtui
 * // Or access via domain
 * const samePkg = pantry.cratesiomdtui
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "md-tui"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/md/tui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiomdtuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'md-tui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/md/tui' as const,
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
  installCommand: 'pkgx crates.io/md-tui' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/md-tui',
  ] as const,
  fullPath: 'crates.io/md-tui' as const,
}

export type CratesiomdtuiPackage = typeof cratesiomdtuiPackage
