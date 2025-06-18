/**
 * **github.com/kishaningithub/tf-import-gen** - pkgx package
 *
 * @domain `github.com/kishaningithub/tf/import-gen`
 *
 * @install `pkgx github.com/kishaningithub/tf-import-gen`
 * @aliases `github.com/kishaningithub/tf-import-gen`, `kishaningithub/tf-import-gen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomkishaningithubtfimportgen
 * // Or access via domain
 * const samePkg = pantry.githubcomkishaningithubtfimportgen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kishaningithub"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kishaningithub/tf/import-gen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkishaningithubtfimportgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'kishaningithub' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kishaningithub/tf/import-gen' as const,
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
  installCommand: 'pkgx github.com/kishaningithub/tf-import-gen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/kishaningithub/tf-import-gen',
    'kishaningithub/tf-import-gen',
  ] as const,
  fullPath: 'github.com/kishaningithub/tf-import-gen' as const,
}

export type GithubcomkishaningithubtfimportgenPackage = typeof githubcomkishaningithubtfimportgenPackage
