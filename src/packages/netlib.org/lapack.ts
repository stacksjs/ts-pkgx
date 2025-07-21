/**
 * **lapack** - Package from pantry: netlib.org/lapack
 *
 * @domain `netlib.org/lapack`
 *
 * @install `launchpad install netlib.org/lapack`
 * @dependencies `gnu.org/gcc^11 # libgfortran`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.netliborglapack
 * console.log(pkg.name)        // "lapack"
 * console.log(pkg.description) // "Package from pantry: netlib.org/lapack"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/netlib-org/lapack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const netliborglapackPackage = {
  /**
   * The display name of this package.
   */
  name: 'lapack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'netlib.org/lapack' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: netlib.org/lapack' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install netlib.org/lapack' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +netlib.org/lapack -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install netlib.org/lapack' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gcc^11 # libgfortran',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/netlib.org/lapack/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NetliborglapackPackage = typeof netliborglapackPackage
