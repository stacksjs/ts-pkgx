/**
 * **portfolio_rs** - Package from pantry: crates.io/portfolio_rs
 *
 * @domain `crates.io/portfolio_rs`
 *
 * @install `launchpad install crates.io/portfolio_rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioportfolio_rs
 * console.log(pkg.name)        // "portfolio_rs"
 * console.log(pkg.description) // "Package from pantry: crates.io/portfolio_rs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/portfolio_rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioportfolio_rsPackage = {
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
  description: 'Package from pantry: crates.io/portfolio_rs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/portfolio_rs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/portfolio_rs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/portfolio_rs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/portfolio_rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Cratesioportfolio_rsPackage = typeof cratesioportfolio_rsPackage
