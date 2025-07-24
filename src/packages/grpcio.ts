/**
 * **grpc.io** - Package from pantry: grpc.io
 *
 * @domain `grpc.io`
 *
 * @install `launchpad install grpc.io`
 * @dependencies `abseil.io^20250127`, `c-ares.org`, `openssl.org^1.1`, ... (+4 more) (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install grpc.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +grpc.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install grpc.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'abseil.io^20250127',
    'c-ares.org',
    'openssl.org^1.1',
    'github.com/google/re2',
    'zlib.net',
    'linux:gnu.org/gcc/libstdcxx',
    'linux:protobuf.dev^30.0.0 # as of 1.72.0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/grpc.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GrpcioPackage = typeof grpcioPackage
