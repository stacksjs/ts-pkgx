/**
 * **gitweb** - Package from pantry: crates.io/gitweb
 *
 * @domain `crates.io/gitweb`
 *
 * @install `launchpad install crates.io/gitweb`
 * @dependencies `openssl.org^1.1`, `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogitweb
 * console.log(pkg.name)        // "gitweb"
 * console.log(pkg.description) // "Package from pantry: crates.io/gitweb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/gitweb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitwebPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitweb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/gitweb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/gitweb' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/gitweb' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/gitweb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/gitweb' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/gitweb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogitwebPackage = typeof cratesiogitwebPackage
