/**
 * **reattach-to-user-namespace** - Notes and workarounds for accessing the Mac OS X pasteboard in tmux sessions. Note: The pu branch (“Proposed Updates”) may be rewound without notice.
 *
 * @domain `github.com/ChrisJohnsen/tmux-MacOSX-pasteboard`
 * @programs `reattach-to-user-namespace`
 * @version `2.9.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install reattach-to-user-namespace`
 * @aliases `reattach-to-user-namespace`
 * @dependencies `gnu.org/make`, `gnu.org/bash`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.reattachtousernamespace
 * // Or access via domain
 * const samePkg = pantry.githubcomchrisjohnsentmuxmacosxpasteboard
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tmux-MacOSX-pasteboard"
 * console.log(pkg.description) // "Notes and workarounds for accessing the Mac OS ..."
 * console.log(pkg.programs)    // ["reattach-to-user-namespace"]
 * console.log(pkg.versions[0]) // "2.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ChrisJohnsen/tmux-MacOSX-pasteboard.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const reattachtousernamespacePackage = {
  /**
   * The display name of this package.
   */
  name: 'tmux-MacOSX-pasteboard' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ChrisJohnsen/tmux-MacOSX-pasteboard' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Notes and workarounds for accessing the Mac OS X pasteboard in tmux sessions. Note: The pu branch (“Proposed Updates”) may be rewound without notice.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ChrisJohnsen/tmux-MacOSX-pasteboard/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install reattach-to-user-namespace' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'reattach-to-user-namespace',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/make',
    'gnu.org/bash',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'reattach-to-user-namespace',
  ] as const,
}

export type ReattachtousernamespacePackage = typeof reattachtousernamespacePackage
