/**
 * **github.com/sctplab/usrsctp** - A portable SCTP userland stack
 *
 * @domain `github.com/sctplab/usrsctp`
 * @version `0.9.5.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/sctplab/usrsctp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsctplabusrsctp
 * console.log(pkg.name)        // "github.com/sctplab/usrsctp"
 * console.log(pkg.description) // "A portable SCTP userland stack"
 * console.log(pkg.versions[0]) // "0.9.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sctplab/usrsctp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsctplabusrsctpPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/sctplab/usrsctp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sctplab/usrsctp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A portable SCTP userland stack' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sctplab/usrsctp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/sctplab/usrsctp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.5.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/sctplab/usrsctp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/sctplab/usrsctp' as const,
}

export type GithubcomsctplabusrsctpPackage = typeof githubcomsctplabusrsctpPackage
