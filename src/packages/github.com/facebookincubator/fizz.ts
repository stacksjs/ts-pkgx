/**
 * **fizz** - Package from pantry: github.com/facebookincubator/fizz
 *
 * @domain `github.com/facebookincubator/fizz`
 *
 * @install `launchpad install github.com/facebookincubator/fizz`
 * @dependencies `boost.org`, `google.com/double-conversion^3`, `fmt.dev^10`, ... (+12 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomfacebookincubatorfizz
 * console.log(pkg.name)        // "fizz"
 * console.log(pkg.description) // "Package from pantry: github.com/facebookincubat..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/facebookincubator/fizz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomfacebookincubatorfizzPackage = {
  /**
   * The display name of this package.
   */
  name: 'fizz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/facebookincubator/fizz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/facebookincubator/fizz' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/facebookincubator/fizz' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/facebookincubator/fizz -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/facebookincubator/fizz' as const,
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
    'fmt.dev^10',
    'facebook.com/folly',
    'gflags.github.io',
    'google.com/glog<0.7',
    'libevent.org',
    'libsodium.org',
    'lz4.org@1',
    'openssl.org^1.1',
    'google.github.io/snappy',
    'facebook.com/zstd@1',
    'sourceware.org/bzip2@1',
    'zlib.net^1',
    'linux:gnu.org/gcc/libstdcxx@13',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/facebookincubator/fizz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomfacebookincubatorfizzPackage = typeof githubcomfacebookincubatorfizzPackage
