/**
 * **+libwebsockets.org -- $SHELL -i** - canonical libwebsockets.org networking library
 *
 * @domain `libwebsockets.org`
 * @version `4.3.5` (4 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libwebsockets-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +libwebsockets.org -- $SHELL -i`
 * @aliases `+libwebsockets.org -- $SHELL -i`
 * @dependencies `libuv.org@1`, `libevent.org@2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libwebsocketsorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.libwebsocketsorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libwebsockets.org"
 * console.log(pkg.description) // "canonical libwebsockets.org networking library"
 * console.log(pkg.versions[0]) // "4.3.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libwebsockets-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libwebsocketsorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'libwebsockets.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libwebsockets.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'canonical libwebsockets.org networking library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libwebsockets.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libwebsockets.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libuv.org@1',
    'libevent.org@2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.3.5',
    '4.3.4',
    '4.3.3',
    '4.3.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+libwebsockets.org -- $SHELL -i',
  ] as const,
  fullPath: 'libwebsockets.org' as const,
}

export type LibwebsocketsorgSHELLiPackage = typeof libwebsocketsorgSHELLiPackage
