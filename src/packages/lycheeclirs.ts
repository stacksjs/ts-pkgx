/**
 * **lychee.cli.rs** - Package from pantry: lychee.cli.rs
 *
 * @domain `lychee.cli.rs`
 *
 * @install `launchpad install lychee.cli.rs`
 * @dependencies `openssl.org>=1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lycheeclirs
 * console.log(pkg.name)        // "lychee.cli.rs"
 * console.log(pkg.description) // "Package from pantry: lychee.cli.rs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lychee-cli-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lycheeclirsPackage = {
  /**
   * The display name of this package.
   */
  name: 'lychee.cli.rs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lychee.cli.rs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: lychee.cli.rs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lychee.cli.rs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lychee.cli.rs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lychee.cli.rs' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org>=1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lychee.cli.rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LycheeclirsPackage = typeof lycheeclirsPackage
