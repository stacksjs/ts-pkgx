/**
 * **mosh** - Remote terminal application
 *
 * @domain `mosh.org`
 * @programs `mosh-client`, `mosh-server`
 * @version `1.4.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +mosh.org -- $SHELL -i`
 * @name `mosh`
 * @dependencies `protobuf.dev@26.1.0`, `invisible-island.net/ncurses@6`, `zlib.net@1.3`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mosh
 * // Or access via domain
 * const samePkg = pantry.moshorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mosh"
 * console.log(pkg.description) // "Remote terminal application"
 * console.log(pkg.programs)    // ["mosh-client", "mosh-server"]
 * console.log(pkg.versions[0]) // "1.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mosh-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const moshPackage = {
  /**
   * The display name of this package.
   */
  name: 'mosh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mosh.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Remote terminal application' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mosh.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +mosh.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mosh-client',
    'mosh-server',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'protobuf.dev@26.1.0',
    'invisible-island.net/ncurses@6',
    'zlib.net@1.3',
    'linuxopenssl.org@3',
    'openssl.org@3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'mosh.org' as const,
}

export type MoshPackage = typeof moshPackage
