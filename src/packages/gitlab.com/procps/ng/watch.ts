/**
 * **gitlab.com/procps-ng/watch** - pkgx package
 *
 * @domain `gitlab.com/procps/ng/watch`
 *
 * @install `pkgx gitlab.com/procps-ng/watch`
 * @aliases `gitlab.com/procps-ng/watch`, `procps-ng/watch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gitlabcomprocpsngwatch
 * // Or access via domain
 * const samePkg = pantry.gitlabcomprocpsngwatch
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "procps-ng"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/procps/ng/watch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomprocpsngwatchPackage = {
  /**
   * The display name of this package.
   */
  name: 'procps-ng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/procps/ng/watch' as const,
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
  installCommand: 'pkgx gitlab.com/procps-ng/watch' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gitlab.com/procps-ng/watch',
    'procps-ng/watch',
  ] as const,
  fullPath: 'gitlab.com/procps-ng/watch' as const,
}

export type GitlabcomprocpsngwatchPackage = typeof gitlabcomprocpsngwatchPackage
