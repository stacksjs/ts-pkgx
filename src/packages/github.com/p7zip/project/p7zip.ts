/**
 * **github.com/p7zip-project/p7zip** - pkgx package
 *
 * @domain `github.com/p7zip/project/p7zip`
 *
 * @install `pkgx github.com/p7zip-project/p7zip`
 * @aliases `github.com/p7zip-project/p7zip`, `p7zip-project/p7zip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomp7zipprojectp7zip
 * // Or access via domain
 * const samePkg = pantry.githubcomp7zipprojectp7zip
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "p7zip-project"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/p7zip/project/p7zip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomp7zipprojectp7zipPackage = {
  /**
   * The display name of this package.
   */
  name: 'p7zip-project' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/p7zip/project/p7zip' as const,
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
  installCommand: 'pkgx github.com/p7zip-project/p7zip' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/p7zip-project/p7zip',
    'p7zip-project/p7zip',
  ] as const,
  fullPath: 'github.com/p7zip-project/p7zip' as const,
}

export type Githubcomp7zipprojectp7zipPackage = typeof githubcomp7zipprojectp7zipPackage
