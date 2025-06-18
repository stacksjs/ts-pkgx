/**
 * **grpc.io** - Package from pantry: grpc.io
 *
 * @domain `grpc.io`
 *
 * @install `launchpad install grpc.io`
 * @dependencies `abseil.io^20250127`, `c-ares.org`, `openssl.org^1.1`, ... (+12 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.grpcio
 * console.log(pkg.name)        // "grpc.io"
 * console.log(pkg.description) // "Package from pantry: grpc.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/grpc-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const grpcioPackage = {
  /**
   * The display name of this package.
   */
  name: 'grpc.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'grpc.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: grpc.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install grpc.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'abseil.io^20250127',
    'c-ares.org',
    'openssl.org^1.1',
    'github.com/google/re2',
    'zlib.net',
    'gnu.org/gcc/libstdcxx',
    'protobuf.dev^30.0.0 # as of 1.72.0',
    'gnu.org/autoconf',
    'gnu.org/automake',
    'gnu.org/libtool',
    'gnu.org/patch',
    'cmake.org^3',
    'freedesktop.org/pkg-config^0',
    'git-scm.org^2',
    'freedesktop.org/pkg-config^0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/grpc.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GrpcioPackage = typeof grpcioPackage
