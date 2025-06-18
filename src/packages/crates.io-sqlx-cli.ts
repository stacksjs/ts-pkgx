/**
 * **sqlx-cli** - 🧰 The Rust SQL Toolkit. An async, pure Rust SQL crate featuring compile-time checked queries without a DSL. Supports PostgreSQL, MySQL, and SQLite.
 *
 * @domain `crates.io/sqlx-cli`
 * @programs `cargo-sqlx`, `sqlx`
 * @version `0.8.6` (7 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sqlx-cli.md
 *
 * @install `sh <(curl https://pkgx.sh) +crates.io/sqlx-cli -- $SHELL -i`
 * @aliases `sqlx-cli`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sqlxcli
 * // Or access via domain
 * const samePkg = pantry.cratesiosqlxcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "crates.io/sqlx-cli"
 * console.log(pkg.description) // "🧰 The Rust SQL Toolkit. An async, pure Rust SQ..."
 * console.log(pkg.programs)    // ["cargo-sqlx", "sqlx"]
 * console.log(pkg.versions[0]) // "0.8.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sqlx-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqlxcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'crates.io/sqlx-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sqlx-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🧰 The Rust SQL Toolkit. An async, pure Rust SQL crate featuring compile-time checked queries without a DSL. Supports PostgreSQL, MySQL, and SQLite.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/sqlx-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +crates.io/sqlx-cli -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cargo-sqlx',
    'sqlx',
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
    '0.8.6',
    '0.8.5',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sqlx-cli',
  ] as const,
  fullPath: 'crates.io/sqlx-cli' as const,
}

export type SqlxcliPackage = typeof sqlxcliPackage
