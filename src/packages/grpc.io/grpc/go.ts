/**
 * **grpc.io/grpc-go** - pkgx package
 *
 * @domain `grpc.io/grpc/go`
 *
 * @install `pkgx grpc.io/grpc-go`
 * @name `grpc-go`
 * @aliases `grpc.io/grpc-go`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.grpciogrpcgo
 * // Or access via domain
 * const samePkg = pantry.grpciogrpcgo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "grpc-go"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/grpc-io/grpc/go.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const grpciogrpcgoPackage = {
  /**
   * The display name of this package.
   */
  name: 'grpc-go' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'grpc.io/grpc/go' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx grpc.io/grpc-go' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'grpc.io/grpc-go',
  ] as const,
  fullPath: 'grpc.io/grpc-go' as const,
}

export type GrpciogrpcgoPackage = typeof grpciogrpcgoPackage
