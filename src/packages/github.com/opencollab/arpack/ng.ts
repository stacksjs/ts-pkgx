/**
 * **github.com/opencollab/arpack-ng** - pkgx package
 *
 * @domain `github.com/opencollab/arpack/ng`
 *
 * @install `pkgx github.com/opencollab/arpack-ng`
 * @aliases `github.com/opencollab/arpack-ng`, `opencollab/arpack-ng`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomopencollabarpackng
 * // Or access via domain
 * const samePkg = pantry.githubcomopencollabarpackng
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "opencollab"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/opencollab/arpack/ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomopencollabarpackngPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencollab' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/opencollab/arpack/ng' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/opencollab/arpack-ng' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/opencollab/arpack-ng',
    'opencollab/arpack-ng',
  ] as const,
  fullPath: 'github.com/opencollab/arpack-ng' as const,
}

export type GithubcomopencollabarpackngPackage = typeof githubcomopencollabarpackngPackage
