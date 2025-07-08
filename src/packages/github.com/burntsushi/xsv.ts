/**
 * **xsv** - Package from pantry: github.com/burntsushi/xsv
 *
 * @domain `github.com/burntsushi/xsv`
 *
 * @install `launchpad install github.com/burntsushi/xsv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomburntsushixsv
 * console.log(pkg.name)        // "xsv"
 * console.log(pkg.description) // "Package from pantry: github.com/burntsushi/xsv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/burntsushi/xsv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomburntsushixsvPackage = {
  /**
   * The display name of this package.
   */
  name: 'xsv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/burntsushi/xsv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/burntsushi/xsv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/burntsushi/xsv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/burntsushi/xsv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/burntsushi/xsv' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/burntsushi/xsv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomburntsushixsvPackage = typeof githubcomburntsushixsvPackage
