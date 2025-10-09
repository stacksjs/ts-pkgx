/**
 * **macfuse.github.io** - macFUSE umbrella repository
 *
 * @domain `macfuse.github.io`
 * @version `5.0.7` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install macfuse.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.macfusegithubio
 * console.log(pkg.name)        // "macfuse.github.io"
 * console.log(pkg.description) // "macFUSE umbrella repository"
 * console.log(pkg.versions[0]) // "5.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/macfuse-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const macfusegithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'macfuse.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'macfuse.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'macFUSE umbrella repository' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/macfuse.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/macfuse/macfuse' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install macfuse.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.0.7',
    '5.0.6',
    '4.10.2',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +macfuse.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install macfuse.github.io' as const,
}

export type MacfusegithubioPackage = typeof macfusegithubioPackage
