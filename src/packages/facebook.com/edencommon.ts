/**
 * **edencommon** - Shared library for Watchman and Eden projects.
 *
 * @domain `facebook.com/edencommon`
 * @version `2025.6.9.0` (93 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +facebook.com/edencommon -- $SHELL -i`
 * @aliases `edencommon`
 * @dependencies `facebook.com/folly`, `gflags.github.io`, `google.com/glog`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.edencommon
 * // Or access via domain
 * const samePkg = pantry.facebookcomedencommon
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "facebook.com/edencommon"
 * console.log(pkg.description) // "Shared library for Watchman and Eden projects."
 * console.log(pkg.versions[0]) // "2025.6.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/edencommon.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const edencommonPackage = {
  /**
   * The display name of this package.
   */
  name: 'facebook.com/edencommon' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/edencommon' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Shared library for Watchman and Eden projects.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/edencommon/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +facebook.com/edencommon -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'facebook.com/folly',
    'gflags.github.io',
    'google.com/glog',
    'facebook.com/fb303',
    'facebook.com/mvfst',
    'openssl.org^1.1',
    'sourceware.org/bzip2^1',
    'boost.org~1.88',
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
    '2025.4.21.0',
    '2025.4.14.0',
    '2025.3.31.0',
    '2025.3.3.0',
    '2025.3.24.0',
    '2025.3.17.0',
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
    '2024.3.18.0',
    '2024.3.11.0',
    '2024.2.5.0',
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
    '2023.8.28.0',
    '2023.8.14.0',
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'edencommon',
  ] as const,
  fullPath: 'facebook.com/edencommon' as const,
}

export type EdencommonPackage = typeof edencommonPackage
