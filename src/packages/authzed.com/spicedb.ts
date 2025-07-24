/**
 * **spicedb** - Package from pantry: authzed.com/spicedb
 *
 * @domain `authzed.com/spicedb`
 *
 * @install `launchpad install authzed.com/spicedb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.authzedcomspicedb
 * console.log(pkg.name)        // "spicedb"
 * console.log(pkg.description) // "Package from pantry: authzed.com/spicedb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/authzed-com/spicedb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const authzedcomspicedbPackage = {
  /**
   * The display name of this package.
   */
  name: 'spicedb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'authzed.com/spicedb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: authzed.com/spicedb' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install authzed.com/spicedb' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +authzed.com/spicedb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install authzed.com/spicedb' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/authzed.com/spicedb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AuthzedcomspicedbPackage = typeof authzedcomspicedbPackage
