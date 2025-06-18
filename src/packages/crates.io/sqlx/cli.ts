/**
 * **crates.io/sqlx-cli** - pkgx package
 *
 * @domain `crates.io/sqlx/cli`
 *
 * @install `pkgx crates.io/sqlx-cli`
 * @name `sqlx-cli`
 * @aliases `crates.io/sqlx-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiosqlxcli
 * // Or access via domain
 * const samePkg = pantry.cratesiosqlxcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sqlx-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sqlx/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosqlxcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqlx-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sqlx/cli' as const,
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
  installCommand: 'pkgx crates.io/sqlx-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/sqlx-cli',
  ] as const,
  fullPath: 'crates.io/sqlx-cli' as const,
}

export type CratesiosqlxcliPackage = typeof cratesiosqlxcliPackage
