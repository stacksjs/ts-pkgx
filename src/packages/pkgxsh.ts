/**
 * **pkgx.sh** - Package from pantry: pkgx.sh
 *
 * @domain `pkgx.sh`
 *
 * @install `launchpad install pkgx.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkgxsh
 * console.log(pkg.name)        // "pkgx.sh"
 * console.log(pkg.description) // "Package from pantry: pkgx.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgxshPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkgx.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pkgx.sh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pkgx.sh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pkgx.sh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pkgx.sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PkgxshPackage = typeof pkgxshPackage
