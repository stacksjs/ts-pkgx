/**
 * **crates.io/rust-kanban** - pkgx package
 *
 * @domain `crates.io/rust/kanban`
 *
 * @install `pkgx crates.io/rust-kanban`
 * @name `rust-kanban`
 * @aliases `crates.io/rust-kanban`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiorustkanban
 * // Or access via domain
 * const samePkg = pantry.cratesiorustkanban
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rust-kanban"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rust/kanban.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiorustkanbanPackage = {
  /**
   * The display name of this package.
   */
  name: 'rust-kanban' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rust/kanban' as const,
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
  installCommand: 'pkgx crates.io/rust-kanban' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/rust-kanban',
  ] as const,
  fullPath: 'crates.io/rust-kanban' as const,
}

export type CratesiorustkanbanPackage = typeof cratesiorustkanbanPackage
