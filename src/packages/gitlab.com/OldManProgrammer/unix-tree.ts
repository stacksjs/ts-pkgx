/**
 * **tree** - Display directories as trees (with optional color/HTML output)
 *
 * @domain `gitlab.com/OldManProgrammer/unix-tree`
 * @programs `tree`
 * @version `2.2.1` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tree`
 * @name `tree`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tree
 * // Or access via domain
 * const samePkg = pantry.gitlabcomoldmanprogrammerunixtree
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tree"
 * console.log(pkg.description) // "Display directories as trees (with optional col..."
 * console.log(pkg.programs)    // ["tree"]
 * console.log(pkg.versions[0]) // "2.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/OldManProgrammer/unix-tree.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const treePackage = {
  /**
   * The display name of this package.
   */
  name: 'tree' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/OldManProgrammer/unix-tree' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Display directories as trees (with optional color/HTML output)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/OldManProgrammer/unix-tree/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tree' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tree',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.2.1',
    '2.2.0',
    '2.1.3',
    '2.1.2',
    '2.1.1',
    '2.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) tree -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tree' as const,
}

export type TreePackage = typeof treePackage
