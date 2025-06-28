/**
 * **usrsctp** - Package from pantry: github.com/sctplab/usrsctp
 *
 * @domain `github.com/sctplab/usrsctp`
 *
 * @install `launchpad install github.com/sctplab/usrsctp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsctplabusrsctp
 * console.log(pkg.name)        // "usrsctp"
 * console.log(pkg.description) // "Package from pantry: github.com/sctplab/usrsctp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sctplab/usrsctp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsctplabusrsctpPackage = {
  /**
   * The display name of this package.
   */
  name: 'usrsctp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sctplab/usrsctp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/sctplab/usrsctp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/sctplab/usrsctp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/sctplab/usrsctp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/sctplab/usrsctp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sctplab/usrsctp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsctplabusrsctpPackage = typeof githubcomsctplabusrsctpPackage
