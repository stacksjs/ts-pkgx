/**
 * **sqlx-cli** - pkgx package
 *
 * @domain `crates.io/sqlx-cli`
 *
 * @install `launchpad install crates.io/sqlx-cli`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosqlxcli
 * console.log(pkg.name)        // "sqlx-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sqlx-cli.md
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
  domain: 'crates.io/sqlx-cli' as const,
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
  installCommand: 'launchpad install crates.io/sqlx-cli' as const,
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
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/sqlx-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/sqlx-cli' as const,
}

export type CratesiosqlxcliPackage = typeof cratesiosqlxcliPackage
