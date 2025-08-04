/**
 * **watchexec.github.io** - Package from pantry: watchexec.github.io
 *
 * @domain `watchexec.github.io`
 *
 * @install `launchpad install watchexec.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.watchexecgithubio
 * console.log(pkg.name)        // "watchexec.github.io"
 * console.log(pkg.description) // "Package from pantry: watchexec.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/watchexec-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const watchexecgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'watchexec.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'watchexec.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: watchexec.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install watchexec.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +watchexec.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install watchexec.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/watchexec.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WatchexecgithubioPackage = typeof watchexecgithubioPackage
