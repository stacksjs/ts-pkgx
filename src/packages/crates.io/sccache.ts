/**
 * **sccache** - pkgx package
 *
 * @domain `crates.io/sccache`
 *
 * @install `launchpad install crates.io/sccache`
 * @dependencies `openssl.org^1.1`, `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosccache
 * console.log(pkg.name)        // "sccache"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sccache.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosccachePackage = {
  /**
   * The display name of this package.
   */
  name: 'sccache' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sccache' as const,
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
  installCommand: 'launchpad install crates.io/sccache' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/sccache -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/sccache' as const,
}

export type CratesiosccachePackage = typeof cratesiosccachePackage
