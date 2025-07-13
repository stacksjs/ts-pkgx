/**
 * **spacetimedb.com** - Package from pantry: spacetimedb.com
 *
 * @domain `spacetimedb.com`
 *
 * @install `launchpad install spacetimedb.com`
 * @dependencies `openssl.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.spacetimedbcom
 * console.log(pkg.name)        // "spacetimedb.com"
 * console.log(pkg.description) // "Package from pantry: spacetimedb.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/spacetimedb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spacetimedbcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'spacetimedb.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'spacetimedb.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: spacetimedb.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install spacetimedb.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +spacetimedb.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install spacetimedb.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/spacetimedb.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SpacetimedbcomPackage = typeof spacetimedbcomPackage
