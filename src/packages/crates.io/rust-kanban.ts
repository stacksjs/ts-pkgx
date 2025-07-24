/**
 * **rust-kanban** - pkgx package
 *
 * @domain `crates.io/rust-kanban`
 *
 * @install `launchpad install crates.io/rust-kanban`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiorustkanban
 * console.log(pkg.name)        // "rust-kanban"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rust-kanban.md
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
  domain: 'crates.io/rust-kanban' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/rust-kanban' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/rust-kanban -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/rust-kanban' as const,
}

export type CratesiorustkanbanPackage = typeof cratesiorustkanbanPackage
