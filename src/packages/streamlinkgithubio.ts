/**
 * **streamlink.github.io** - Package from pantry: streamlink.github.io
 *
 * @domain `streamlink.github.io`
 *
 * @install `launchpad install streamlink.github.io`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.streamlinkgithubio
 * console.log(pkg.name)        // "streamlink.github.io"
 * console.log(pkg.description) // "Package from pantry: streamlink.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/streamlink-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const streamlinkgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'streamlink.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'streamlink.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: streamlink.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install streamlink.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +streamlink.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install streamlink.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/streamlink.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type StreamlinkgithubioPackage = typeof streamlinkgithubioPackage
