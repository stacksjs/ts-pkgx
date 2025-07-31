/**
 * **pkgm** - Package from pantry: pkgx.sh/pkgm
 *
 * @domain `pkgx.sh/pkgm`
 *
 * @install `launchpad install pkgx.sh/pkgm`
 * @dependencies `pkgx.sh^2`, `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkgxshpkgm
 * console.log(pkg.name)        // "pkgm"
 * console.log(pkg.description) // "Package from pantry: pkgx.sh/pkgm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh/pkgm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgxshpkgmPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkgm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh/pkgm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pkgx.sh/pkgm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pkgx.sh/pkgm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pkgx.sh/pkgm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pkgx.sh/pkgm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^2',
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/pkgm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PkgxshpkgmPackage = typeof pkgxshpkgmPackage
