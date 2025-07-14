/**
 * **speexdsp** - Package from pantry: github.com/xiph/speexdsp
 *
 * @domain `github.com/xiph/speexdsp`
 *
 * @install `launchpad install github.com/xiph/speexdsp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomxiphspeexdsp
 * console.log(pkg.name)        // "speexdsp"
 * console.log(pkg.description) // "Package from pantry: github.com/xiph/speexdsp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xiph/speexdsp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomxiphspeexdspPackage = {
  /**
   * The display name of this package.
   */
  name: 'speexdsp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/xiph/speexdsp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/xiph/speexdsp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/xiph/speexdsp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/xiph/speexdsp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/xiph/speexdsp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/xiph/speexdsp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomxiphspeexdspPackage = typeof githubcomxiphspeexdspPackage
