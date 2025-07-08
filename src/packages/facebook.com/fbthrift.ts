/**
 * **fbthrift** - Package from pantry: facebook.com/fbthrift
 *
 * @domain `facebook.com/fbthrift`
 *
 * @install `launchpad install facebook.com/fbthrift`
 * @dependencies `github.com/facebookincubator/fizz`, `facebook.com/folly`, `facebook.com/wangle`, ... (+10 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.facebookcomfbthrift
 * console.log(pkg.name)        // "fbthrift"
 * console.log(pkg.description) // "Package from pantry: facebook.com/fbthrift"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/fbthrift.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookcomfbthriftPackage = {
  /**
   * The display name of this package.
   */
  name: 'fbthrift' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/fbthrift' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: facebook.com/fbthrift' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install facebook.com/fbthrift' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +facebook.com/fbthrift -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install facebook.com/fbthrift' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'github.com/facebookincubator/fizz',
    'facebook.com/folly',
    'facebook.com/wangle',
    'fmt.dev^10',
    'gflags.github.io^2.2.2',
    'google.com/glog^0.6',
    'openssl.org^1.1',
    'boost.org^1.83',
    'facebook.com/zstd^1.5.5',
    'zlib.net^1.3',
    'libsodium.org^1.0.19',
    'github.com/Cyan4973/xxHash^0.8',
    'linux:gnu.org/gcc/libstdcxx@13',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/fbthrift/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FacebookcomfbthriftPackage = typeof facebookcomfbthriftPackage
