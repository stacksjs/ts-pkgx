/**
 * **gitlab.com/OldManProgrammer/unix-tree** - pkgx package
 *
 * @domain `gitlab.com/OldManProgrammer/unix/tree`
 *
 * @install `pkgx gitlab.com/OldManProgrammer/unix-tree`
 * @aliases `gitlab.com/OldManProgrammer/unix-tree`, `OldManProgrammer/unix-tree`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gitlabcomOldManProgrammerunixtree
 * // Or access via domain
 * const samePkg = pantry.gitlabcomoldmanprogrammerunixtree
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "OldManProgrammer"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/OldManProgrammer/unix/tree.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomOldManProgrammerunixtreePackage = {
  /**
   * The display name of this package.
   */
  name: 'OldManProgrammer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/OldManProgrammer/unix/tree' as const,
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
  installCommand: 'pkgx gitlab.com/OldManProgrammer/unix-tree' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gitlab.com/OldManProgrammer/unix-tree',
    'OldManProgrammer/unix-tree',
  ] as const,
  fullPath: 'gitlab.com/OldManProgrammer/unix-tree' as const,
}

export type GitlabcomOldManProgrammerunixtreePackage = typeof gitlabcomOldManProgrammerunixtreePackage
