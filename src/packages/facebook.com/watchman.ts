/**
 * **watchman** - Package from pantry: facebook.com/watchman
 *
 * @domain `facebook.com/watchman`
 *
 * @install `launchpad install facebook.com/watchman`
 * @dependencies `facebook.com/edencommon`, `facebook.com/fb303`, `facebook.com/folly`, ... (+10 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.facebookcomwatchman
 * console.log(pkg.name)        // "watchman"
 * console.log(pkg.description) // "Package from pantry: facebook.com/watchman"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/watchman.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookcomwatchmanPackage = {
  /**
   * The display name of this package.
   */
  name: 'watchman' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/watchman' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: facebook.com/watchman' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install facebook.com/watchman' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +facebook.com/watchman -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install facebook.com/watchman' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'facebook.com/edencommon',
    'facebook.com/fb303',
    'facebook.com/folly',
    'fmt.dev>=9',
    'gflags.github.io^2',
    'google.com/glog^0.6',
    'libevent.org^2.1',
    'libsodium.org^1',
    'openssl.org^1.1',
    'pcre.org/v2^10',
    'python.org~3.11',
    'linux:libcxx.llvm.org^18 # libunwind',
    'linux:gnu.org/gcc/libstdcxx@13',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/watchman/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FacebookcomwatchmanPackage = typeof facebookcomwatchmanPackage
