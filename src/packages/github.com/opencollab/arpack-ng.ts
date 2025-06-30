/**
 * **arpack-ng** - Package from pantry: github.com/opencollab/arpack-ng
 *
 * @domain `github.com/opencollab/arpack-ng`
 *
 * @install `launchpad install github.com/opencollab/arpack-ng`
 * @dependencies `eigen.tuxfamily.org@3`, `gnu.org/gcc`, `open-mpi.org@5`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomopencollabarpackng
 * console.log(pkg.name)        // "arpack-ng"
 * console.log(pkg.description) // "Package from pantry: github.com/opencollab/arpa..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/opencollab/arpack-ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomopencollabarpackngPackage = {
  /**
   * The display name of this package.
   */
  name: 'arpack-ng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/opencollab/arpack-ng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/opencollab/arpack-ng' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/opencollab/arpack-ng' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/opencollab/arpack-ng -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/opencollab/arpack-ng' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/opencollab/arpack-ng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomopencollabarpackngPackage = typeof githubcomopencollabarpackngPackage
