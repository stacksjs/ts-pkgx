/**
 * **hwloc** - Package from pantry: open-mpi.org/hwloc
 *
 * @domain `open-mpi.org/hwloc`
 *
 * @install `launchpad install open-mpi.org/hwloc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openmpiorghwloc
 * console.log(pkg.name)        // "hwloc"
 * console.log(pkg.description) // "Package from pantry: open-mpi.org/hwloc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/open-mpi-org/hwloc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openmpiorghwlocPackage = {
  /**
   * The display name of this package.
   */
  name: 'hwloc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'open-mpi.org/hwloc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: open-mpi.org/hwloc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install open-mpi.org/hwloc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +open-mpi.org/hwloc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install open-mpi.org/hwloc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/open-mpi.org/hwloc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenmpiorghwlocPackage = typeof openmpiorghwlocPackage
