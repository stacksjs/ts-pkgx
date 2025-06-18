/**
 * **libwebsockets.org** - canonical libwebsockets.org networking library
 *
 * @domain `libwebsockets.org`
 * @version `4.3.5` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +libwebsockets.org -- $SHELL -i`
 * @dependencies `libuv.org@1`, `libevent.org@2`, `cmake.org@3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libwebsocketsorg
 * console.log(pkg.name)        // "libwebsockets.org"
 * console.log(pkg.description) // "canonical libwebsockets.org networking library"
 * console.log(pkg.versions[0]) // "4.3.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libwebsockets-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libwebsocketsorgPackage = {
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
  installCommand: 'launchpad install +libwebsockets.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libuv.org@1',
    'libevent.org@2',
    'cmake.org@3',
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
  aliases: [] as const,
}

export type LibwebsocketsorgPackage = typeof libwebsocketsorgPackage
