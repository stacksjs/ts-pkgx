/**
 * **sctplab/usrsctp** - A portable SCTP userland stack
 *
 * @domain `github.com/sctplab/usrsctp`
 * @version `0.9.5.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/sctplab/usrsctp -- $SHELL -i`
 * @aliases `sctplab/usrsctp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sctplabusrsctp
 * // Or access via domain
 * const samePkg = pantry.githubcomsctplabusrsctp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/sctplab/usrsctp"
 * console.log(pkg.description) // "A portable SCTP userland stack"
 * console.log(pkg.versions[0]) // "0.9.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sctplab/usrsctp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sctplabusrsctpPackage = {
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/sctplab/usrsctp -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sctplab/usrsctp',
  ] as const,
  fullPath: 'github.com/sctplab/usrsctp' as const,
}

export type SctplabusrsctpPackage = typeof sctplabusrsctpPackage
