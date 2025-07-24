/**
 * **arrow** - Package from pantry: apache.org/arrow
 *
 * @domain `apache.org/arrow`
 *
 * @install `launchpad install apache.org/arrow`
 * @dependencies `github.com/aws/aws-sdk-cpp`, `github.com/google/brotli`, `sourceware.org/bzip2`, ... (+13 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorgarrow
 * console.log(pkg.name)        // "arrow"
 * console.log(pkg.description) // "Package from pantry: apache.org/arrow"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/arrow.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorgarrowPackage = {
  /**
   * The display name of this package.
   */
  name: 'arrow' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/arrow' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apache.org/arrow' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/arrow' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/arrow -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/arrow' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
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
    'darwin:c-ares.org@1',
    'darwin:libcxx.llvm.org~17 # since 18.1.0',
    'linux:protobuf.dev^30.0.0 # match grpc.io, so gdal.org can build, we bundle on darwin',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/arrow/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApacheorgarrowPackage = typeof apacheorgarrowPackage
