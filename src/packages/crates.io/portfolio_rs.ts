/**
 * **portfolio_rs** - A command line tool for managing financial investment portfolios.
 *
 * @domain `crates.io/portfolio_rs`
 * @programs `portfolio_rs`
 * @version `0.2.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install portfolio_rs`
 * @name `portfolio_rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.portfoliors
 * // Or access via domain
 * const samePkg = pantry.cratesioportfolio_rs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "portfolio_rs"
 * console.log(pkg.description) // "A command line tool for managing financial inve..."
 * console.log(pkg.programs)    // ["portfolio_rs"]
 * console.log(pkg.versions[0]) // "0.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/portfolio_rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const portfoliorsPackage = {
  /**
   * The display name of this package.
   */
  name: 'portfolio_rs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/portfolio_rs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A command line tool for managing financial investment portfolios.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/portfolio_rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install portfolio_rs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'portfolio_rs',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.1',
    '0.2.0',
    '0.1.12',
    '0.1.11',
    '0.1.10',
    '0.1.9',
    '0.1.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type PortfoliorsPackage = typeof portfoliorsPackage
