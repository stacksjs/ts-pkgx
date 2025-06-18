/**
 * **arrow** - Apache Arrow is the universal columnar format and multi-language toolbox for fast data interchange and in-memory analytics
 *
 * @domain `apache.org/arrow`
 * @programs `parquet-dump-schema`, `parquet-reader`, `parquet-scan`
 * @version `20.0.0` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +apache.org/arrow -- $SHELL -i`
 * @aliases `arrow`
 * @dependencies `github.com/aws/aws-sdk-cpp`, `github.com/google/brotli`, `sourceware.org/bzip2`, ... (+15 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.arrow
 * // Or access via domain
 * const samePkg = pantry.apacheorgarrow
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "apache.org/arrow"
 * console.log(pkg.description) // "Apache Arrow is the universal columnar format a..."
 * console.log(pkg.programs)    // ["parquet-dump-schema", "parquet-reader", ...]
 * console.log(pkg.versions[0]) // "20.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/arrow.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const arrowPackage = {
  /**
   * The display name of this package.
   */
  name: 'apache.org/arrow' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/arrow' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Apache Arrow is the universal columnar format and multi-language toolbox for fast data interchange and in-memory analytics' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/arrow/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +apache.org/arrow -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'parquet-dump-schema',
    'parquet-reader',
    'parquet-scan',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/aws/aws-sdk-cpp',
    'github.com/google/brotli',
    'sourceware.org/bzip2',
    'google.com/glog',
    'grpc.io',
    'lz4.org',
    'openssl.org',
    'rapidjson.org',
    'github.com/google/re2',
    'google.github.io/snappy',
    'apache.org/thrift',
    'github.com/JuliaStrings/utf8proc',
    'facebook.com/zstd',
    'darwinc-ares.org@1libcxx.llvm.org~17',
    'c-ares.org@1',
    'libcxx.llvm.org~17',
    'linuxprotobuf.dev@26.1.0',
    'protobuf.dev@26.1.0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20.0.0',
    '19.0.1',
    '19.0.0',
    '18.1.0',
    '18.0.0',
    '16.1.0',
    '16.0.0',
    '15.0.2',
    '15.0.1',
    '15.0.0',
    '14.0.2',
    '14.0.1',
    '14.0.0',
    '13.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'arrow',
  ] as const,
  fullPath: 'apache.org/arrow' as const,
}

export type ArrowPackage = typeof arrowPackage
