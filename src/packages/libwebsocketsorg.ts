/**
 * **libwebsockets.org** - Package from pantry: libwebsockets.org
 *
 * @domain `libwebsockets.org`
 *
 * @install `launchpad install libwebsockets.org`
 * @dependencies `libuv.org^1`, `libevent.org^2`, `cmake.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libwebsocketsorg
 * console.log(pkg.name)        // "libwebsockets.org"
 * console.log(pkg.description) // "Package from pantry: libwebsockets.org"
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
  description: 'Package from pantry: libwebsockets.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install libwebsockets.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libuv.org^1',
    'libevent.org^2',
    'cmake.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libwebsockets.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibwebsocketsorgPackage = typeof libwebsocketsorgPackage
