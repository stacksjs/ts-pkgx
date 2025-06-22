/**
 * **edgedb.com** - Package from pantry: edgedb.com
 *
 * @domain `edgedb.com`
 *
 * @install `launchpad install edgedb.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.edgedbcom
 * console.log(pkg.name)        // "edgedb.com"
 * console.log(pkg.description) // "Package from pantry: edgedb.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/edgedb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const edgedbcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'edgedb.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'edgedb.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: edgedb.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install edgedb.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +edgedb.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install edgedb.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/edgedb.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EdgedbcomPackage = typeof edgedbcomPackage
