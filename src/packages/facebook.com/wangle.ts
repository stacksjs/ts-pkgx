/**
 * **wangle** - Package from pantry: facebook.com/wangle
 *
 * @domain `facebook.com/wangle`
 *
 * @install `launchpad install facebook.com/wangle`
 * @dependencies `boost.org`, `google.com/double-conversion^3`, `github.com/facebookincubator/fizz`, ... (+13 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.facebookcomwangle
 * console.log(pkg.name)        // "wangle"
 * console.log(pkg.description) // "Package from pantry: facebook.com/wangle"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/wangle.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookcomwanglePackage = {
  /**
   * The display name of this package.
   */
  name: 'wangle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/wangle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: facebook.com/wangle' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install facebook.com/wangle' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +facebook.com/wangle -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install facebook.com/wangle' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'boost.org',
    'google.com/double-conversion^3',
    'github.com/facebookincubator/fizz',
    'fmt.dev^10',
    'facebook.com/folly',
    'gflags.github.io',
    'google.com/glog<0.7',
    'libevent.org',
    'libsodium.org',
    'lz4.org^1',
    'openssl.org^1.1',
    'google.github.io/snappy',
    'facebook.com/zstd^1',
    'darwin:sourceware.org/bzip2',
    'darwin:zlib.net',
    'linux:gnu.org/gcc/libstdcxx@13',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/wangle/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FacebookcomwanglePackage = typeof facebookcomwanglePackage
