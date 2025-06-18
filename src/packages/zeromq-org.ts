/**
 * **zeromq.org** - ZeroMQ core engine in C++, implements ZMTP/3.1
 *
 * @domain `zeromq.org`
 * @version `4.3.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +zeromq.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zeromqorg
 * console.log(pkg.name)        // "zeromq.org"
 * console.log(pkg.description) // "ZeroMQ core engine in C++, implements ZMTP/3.1"
 * console.log(pkg.versions[0]) // "4.3.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zeromq-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zeromqorgPackage = {
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
  aliases: [] as const,
  fullPath: 'zeromq.org' as const,
}

export type ZeromqorgPackage = typeof zeromqorgPackage
