/**
 * **folly** - Package from pantry: facebook.com/folly
 *
 * @domain `facebook.com/folly`
 *
 * @install `launchpad install facebook.com/folly`
 * @dependencies `boost.org`, `gflags.github.io`, `google.com/glog<0.7`, ... (+17 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.facebookcomfolly
 * console.log(pkg.name)        // "folly"
 * console.log(pkg.description) // "Package from pantry: facebook.com/folly"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/folly.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookcomfollyPackage = {
  /**
   * The display name of this package.
   */
  name: 'folly' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/folly' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: facebook.com/folly' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install facebook.com/folly' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +facebook.com/folly -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install facebook.com/folly' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'boost.org',
    'gflags.github.io',
    'google.com/glog<0.7',
    'libevent.org',
    'lz4.org@1',
    'openssl.org^1.1',
    'tukaani.org/xz@5',
    'facebook.com/zstd@1',
    'gnu.org/coreutils@9',
    'google.github.io/snappy',
    'google.com/double-conversion^3',
    'google.com/googletest^1',
    'fmt.dev^10',
    'zlib.net^1',
    'github.com/fastfloat/fast_float@7',
    'darwin:sourceware.org/bzip2',
    'linux:libcxx.llvm.org^18 # libunwind, since 2024.5.13.0',
    'linux:jemalloc.net^5 # since 2024.5.13.0',
    'linux:elfutils.org^0 # for dwarf.h, since 2024.5.13.0',
    'linux:gnu.org/gcc/libstdcxx@13',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/folly/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FacebookcomfollyPackage = typeof facebookcomfollyPackage
