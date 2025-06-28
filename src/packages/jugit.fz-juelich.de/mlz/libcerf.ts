/**
 * **libcerf** - Package from pantry: jugit.fz-juelich.de/mlz/libcerf
 *
 * @domain `jugit.fz-juelich.de/mlz/libcerf`
 *
 * @install `launchpad install jugit.fz-juelich.de/mlz/libcerf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jugitfzjuelichdemlzlibcerf
 * console.log(pkg.name)        // "libcerf"
 * console.log(pkg.description) // "Package from pantry: jugit.fz-juelich.de/mlz/li..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jugit-fz-juelich-de/mlz/libcerf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jugitfzjuelichdemlzlibcerfPackage = {
  /**
   * The display name of this package.
   */
  name: 'libcerf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jugit.fz-juelich.de/mlz/libcerf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jugit.fz-juelich.de/mlz/libcerf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jugit.fz-juelich.de/mlz/libcerf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jugit.fz-juelich.de/mlz/libcerf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jugit.fz-juelich.de/mlz/libcerf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jugit.fz-juelich.de/mlz/libcerf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JugitfzjuelichdemlzlibcerfPackage = typeof jugitfzjuelichdemlzlibcerfPackage
