/**
 * **github.com/shaka-project/shaka-packager** - pkgx package
 *
 * @domain `github.com/shaka/project/shaka-packager`
 *
 * @install `pkgx github.com/shaka-project/shaka-packager`
 * @aliases `github.com/shaka-project/shaka-packager`, `shaka-project/shaka-packager`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomshakaprojectshakapackager
 * // Or access via domain
 * const samePkg = pantry.githubcomshakaprojectshakapackager
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "shaka-project"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/shaka/project/shaka-packager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomshakaprojectshakapackagerPackage = {
  /**
   * The display name of this package.
   */
  name: 'shaka-project' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/shaka/project/shaka-packager' as const,
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
  installCommand: 'pkgx github.com/shaka-project/shaka-packager' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/shaka-project/shaka-packager',
    'shaka-project/shaka-packager',
  ] as const,
  fullPath: 'github.com/shaka-project/shaka-packager' as const,
}

export type GithubcomshakaprojectshakapackagerPackage = typeof githubcomshakaprojectshakapackagerPackage
