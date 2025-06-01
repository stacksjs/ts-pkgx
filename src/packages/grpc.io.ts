/**
 * **grpc** - Crafters of fine Open Source products
 *
 * @domain `grpc.io`
 *
 * @install `pkgx grpc.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.grpcio
 * console.log(pkg.name)        // "grpc"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/grpc-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const grpcioPackage = {
  /**
   * The display name of this package.
   */
  name: 'grpc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/grpc.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'grpc.io' as const,
  fullPath: 'grpc.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx grpc.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GrpcioPackage = typeof grpcioPackage
