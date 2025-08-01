/**
 * **facebook.com/wangle** - Wangle is a framework providing a set of common client/server abstractions for building services in a consistent, modular, and composable way.
 *
 * @domain `facebook.com/wangle`
 * @version `2025.7.7.0` (99 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install facebook.com/wangle`
 * @dependencies `boost.org`, `google.com/double-conversion^3`, `github.com/facebookincubator/fizz`, ... (+13 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.facebookcomwangle
 * console.log(pkg.name)        // "facebook.com/wangle"
 * console.log(pkg.description) // "Wangle is a framework providing a set of common..."
 * console.log(pkg.versions[0]) // "2025.7.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/wangle.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookcomwanglePackage = {
  /**
   * The display name of this package.
   */
  name: 'facebook.com/wangle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/wangle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Wangle is a framework providing a set of common client/server abstractions for building services in a consistent, modular, and composable way.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/wangle/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install facebook.com/wangle' as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.7.7.0',
    '2025.7.28.0',
    '2025.7.21.0',
    '2025.7.14.0',
    '2025.6.9.0',
    '2025.6.30.0',
    '2025.6.23.0',
    '2025.6.2.0',
    '2025.6.16.0',
    '2025.5.5.0',
    '2025.5.26.0',
    '2025.5.19.0',
    '2025.5.12.0',
    '2025.4.7.0',
    '2025.4.28.0',
    '2025.4.21.0',
    '2025.4.14.0',
    '2025.3.31.0',
    '2025.3.3.0',
    '2025.3.24.0',
    '2025.3.17.0',
    '2025.3.10.0',
    '2025.2.3.0',
    '2025.2.24.0',
    '2025.2.17.0',
    '2025.2.10.0',
    '2025.1.6.0',
    '2025.1.27.0',
    '2025.1.20.0',
    '2025.1.13.0',
    '2024.9.30.0',
    '2024.9.23.0',
    '2024.9.2.0',
    '2024.9.16.0',
    '2024.8.5.0',
    '2024.8.26.0',
    '2024.8.19.0',
    '2024.8.12.0',
    '2024.7.8.0',
    '2024.7.29.0',
    '2024.7.22.0',
    '2024.7.15.0',
    '2024.7.1.0',
    '2024.6.24.0',
    '2024.6.17.0',
    '2024.6.10.0',
    '2024.5.6.0',
    '2024.5.27.0',
    '2024.5.20.0',
    '2024.5.2.0',
    '2024.5.13.0',
    '2024.4.8.0',
    '2024.4.29.0',
    '2024.4.22.0',
    '2024.4.15.0',
    '2024.4.1.0',
    '2024.3.4.0',
    '2024.3.25.0',
    '2024.3.18.0',
    '2024.3.11.0',
    '2024.2.5.0',
    '2024.2.26.0',
    '2024.2.19.0',
    '2024.2.12.0',
    '2024.12.9.0',
    '2024.12.30.0',
    '2024.12.23.0',
    '2024.12.2.0',
    '2024.12.16.0',
    '2024.11.4.0',
    '2024.11.25.0',
    '2024.11.18.0',
    '2024.11.11.0',
    '2024.10.7.0',
    '2024.10.28.0',
    '2024.10.21.0',
    '2024.10.14.0',
    '2024.1.8.0',
    '2024.1.29.0',
    '2024.1.22.0',
    '2024.1.15.0',
    '2024.1.1.0',
    '2023.9.4.0',
    '2023.9.25.0',
    '2023.9.18.0',
    '2023.9.11.0',
    '2023.12.4.0',
    '2023.12.25.0',
    '2023.12.18.0',
    '2023.12.11.0',
    '2023.11.6.0',
    '2023.11.27.0',
    '2023.11.20.0',
    '2023.11.13.0',
    '2023.10.9.0',
    '2023.10.30.0',
    '2023.10.23.0',
    '2023.10.2.0',
    '2023.10.16.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +facebook.com/wangle -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install facebook.com/wangle' as const,
}

export type FacebookcomwanglePackage = typeof facebookcomwanglePackage
