/**
 * **procps-ng** - pkgx package
 *
 * @domain `gitlab.com/procps-ng`
 *
 * @install `pkgx gitlab.com/procps-ng`
 * @name `procps-ng`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.procpsng
 * // Or access via domain
 * const samePkg = pantry.gitlabcomprocpsng
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "procps-ng"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/procps-ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const procpsngPackage = {
  /**
   * The display name of this package.
   */
  name: 'procps-ng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/procps-ng' as const,
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
  installCommand: 'pkgx gitlab.com/procps-ng' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gitlab.com/procps-ng' as const,
}

export type ProcpsngPackage = typeof procpsngPackage
