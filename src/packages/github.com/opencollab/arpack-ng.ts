/**
 * **github.com/opencollab/arpack-ng** - Collection of Fortran77 subroutines designed to solve large scale eigenvalue problems.
 *
 * @domain `github.com/opencollab/arpack-ng`
 * @version `3.9.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/opencollab/arpack-ng`
 * @dependencies `eigen.tuxfamily.org@3`, `gnu.org/gcc`, `open-mpi.org@5`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomopencollabarpackng
 * console.log(pkg.name)        // "github.com/opencollab/arpack-ng"
 * console.log(pkg.description) // "Collection of Fortran77 subroutines designed to..."
 * console.log(pkg.versions[0]) // "3.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/opencollab/arpack-ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomopencollabarpackngPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/opencollab/arpack-ng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/opencollab/arpack-ng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Collection of Fortran77 subroutines designed to solve large scale eigenvalue problems.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/opencollab/arpack-ng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/opencollab/arpack-ng' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'eigen.tuxfamily.org@3',
    'gnu.org/gcc',
    'open-mpi.org@5',
    'netlib.org/lapack@3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.9.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/opencollab/arpack-ng -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/opencollab/arpack-ng' as const,
}

export type GithubcomopencollabarpackngPackage = typeof githubcomopencollabarpackngPackage
