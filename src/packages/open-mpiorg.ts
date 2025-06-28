/**
 * **open-mpi.org** - Package from pantry: open-mpi.org
 *
 * @domain `open-mpi.org`
 *
 * @install `launchpad install open-mpi.org`
 * @dependencies `open-mpi.org/hwloc`, `openpmix.github.io@5`, `libevent.org`
 * @companions `OMPI_F77FLAGS^$FCFLAGS -I{{prefix}}/include`, `OMPI_F90FLAGS^$FCFLAGS -I{{prefix}}/include`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openmpiorg
 * console.log(pkg.name)        // "open-mpi.org"
 * console.log(pkg.description) // "Package from pantry: open-mpi.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/open-mpi-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openmpiorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'open-mpi.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'open-mpi.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: open-mpi.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install open-mpi.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +open-mpi.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install open-mpi.org' as const,
  programs: [] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'OMPI_F77FLAGS^$FCFLAGS -I{{prefix}}/include',
    'OMPI_F90FLAGS^$FCFLAGS -I{{prefix}}/include',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'open-mpi.org/hwloc',
    'openpmix.github.io@5',
    'libevent.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/open-mpi.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenmpiorgPackage = typeof openmpiorgPackage
