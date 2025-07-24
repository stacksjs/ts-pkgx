/**
 * **unix-tree** - Package from pantry: gitlab.com/OldManProgrammer/unix-tree
 *
 * @domain `gitlab.com/OldManProgrammer/unix-tree`
 *
 * @install `launchpad install gitlab.com/OldManProgrammer/unix-tree`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitlabcomoldmanprogrammerunixtree
 * console.log(pkg.name)        // "unix-tree"
 * console.log(pkg.description) // "Package from pantry: gitlab.com/OldManProgramme..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/OldManProgrammer/unix-tree.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomoldmanprogrammerunixtreePackage = {
  /**
   * The display name of this package.
   */
  name: 'unix-tree' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/OldManProgrammer/unix-tree' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gitlab.com/OldManProgrammer/unix-tree' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gitlab.com/OldManProgrammer/unix-tree' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gitlab.com/OldManProgrammer/unix-tree -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gitlab.com/OldManProgrammer/unix-tree' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/OldManProgrammer/unix-tree/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitlabcomoldmanprogrammerunixtreePackage = typeof gitlabcomoldmanprogrammerunixtreePackage
