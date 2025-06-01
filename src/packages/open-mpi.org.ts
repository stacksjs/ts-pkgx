/**
 * **open-mpi.org** - Open MPI main development repository
 *
 * @domain `open-mpi.org`
 * @programs `mpic++`, `mpiCC`, `mpicc`, `mpicxx`, `mpiexec`, ... (+6 more)
 * @version `5.0.8` (11 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/open-mpi-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +open-mpi.org -- $SHELL -i`
 * @dependencies `open-mpi.org/hwloc`, `openpmix.github.io@5`, `libevent.org`
 * @companions `gnu.org/gcc`, `gnu.org/inetutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openmpiorg
 * console.log(pkg.name)        // "open-mpi.org"
 * console.log(pkg.description) // "Open MPI main development repository"
 * console.log(pkg.programs)    // ["mpic++", "mpiCC", ...]
 * console.log(pkg.versions[0]) // "5.0.8" (latest)
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
  description: 'Open MPI main development repository' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/open-mpi.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +open-mpi.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mpic++',
    'mpiCC',
    'mpicc',
    'mpicxx',
    'mpiexec',
    'mpif77',
    'mpif90',
    'mpifort',
    'mpirun',
    'ompi_info',
    'opal_wrapper',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'gnu.org/gcc',
    'gnu.org/inetutils',
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.0.8',
    '5.0.7',
    '5.0.6',
    '5.0.5',
    '5.0.4',
    '5.0.3',
    '5.0.2',
    '5.0.1',
    '4.1.8',
    '4.1.7',
    '4.1.5',
  ] as const,
  aliases: [] as const,
  fullPath: 'open-mpi.org' as const,
}

export type OpenmpiorgPackage = typeof openmpiorgPackage
