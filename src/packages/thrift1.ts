/**
 * **thrift1** - Facebook's branch of Apache Thrift, including a new C++ server.
 *
 * @domain `facebook.com/fbthrift`
 * @programs `thrift1`
 * @version `2025.6.9.0` (77 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/fbthrift.md
 *
 * @install `sh <(curl https://pkgx.sh) thrift1`
 * @name `thrift1`
 * @aliases `fbthrift`
 * @dependencies `github.com/facebookincubator/fizz`, `facebook.com/folly`, `facebook.com/wangle`, ... (+11 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.thrift1
 * // Or access via domain
 * const samePkg = pantry.facebookcomfbthrift
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "thrift1"
 * console.log(pkg.description) // "Facebook's branch of Apache Thrift, including a..."
 * console.log(pkg.programs)    // ["thrift1"]
 * console.log(pkg.versions[0]) // "2025.6.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/fbthrift.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thrift1Package = {
  /**
   * The display name of this package.
   */
  name: 'thrift1' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/fbthrift' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Facebook\'s branch of Apache Thrift, including a new C++ server.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/fbthrift/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) thrift1' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'thrift1',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
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
    'linuxgnu.org/gcc/libstdcxx@13',
    'gnu.org/gcc/libstdcxx@13',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.6.9.0',
    '2025.6.2.0',
    '2025.6.16.0',
    '2025.5.5.0',
    '2025.5.26.0',
    '2025.5.19.0',
    '2025.5.12.0',
    '2025.4.7.0',
    '2025.4.28.0',
    '2025.4.14.0',
    '2025.3.31.0',
    '2025.3.3.0',
    '2025.3.24.0',
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
    '2024.6.3.0',
    '2024.6.24.0',
    '2024.6.17.0',
    '2024.6.10.0',
    '2024.5.6.0',
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
    '2023.12.25.0',
    '2023.12.18.0',
    '2023.12.11.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'fbthrift',
  ] as const,
  fullPath: 'facebook.com/fbthrift' as const,
}

export type Thrift1Package = typeof thrift1Package
