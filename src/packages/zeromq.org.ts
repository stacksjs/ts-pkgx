/**
 * **+zeromq.org -- $SHELL -i** - ZeroMQ core engine in C++, implements ZMTP/3.1
 *
 * @domain `zeromq.org`
 * @version `4.3.5` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/zeromq-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +zeromq.org -- $SHELL -i`
 * @aliases `+zeromq.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.zeromqorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.zeromqorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zeromq.org"
 * console.log(pkg.description) // "ZeroMQ core engine in C++, implements ZMTP/3.1"
 * console.log(pkg.versions[0]) // "4.3.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zeromq-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zeromqorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'zeromq.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zeromq.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'ZeroMQ core engine in C++, implements ZMTP/3.1' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zeromq.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +zeromq.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.3.5',
    '4.3.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+zeromq.org -- $SHELL -i',
  ] as const,
  fullPath: 'zeromq.org' as const,
}

export type ZeromqorgSHELLiPackage = typeof zeromqorgSHELLiPackage
