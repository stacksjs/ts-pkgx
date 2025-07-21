/**
 * **grpc-go** - Package from pantry: grpc.io/grpc-go
 *
 * @domain `grpc.io/grpc-go`
 *
 * @install `launchpad install grpc.io/grpc-go`
 * @dependencies `google.com/protobuf-go^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.grpciogrpcgo
 * console.log(pkg.name)        // "grpc-go"
 * console.log(pkg.description) // "Package from pantry: grpc.io/grpc-go"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/grpc-io/grpc-go.md
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
  domain: 'grpc.io/grpc-go' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: grpc.io/grpc-go' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install grpc.io/grpc-go' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +grpc.io/grpc-go -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install grpc.io/grpc-go' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'google.com/protobuf-go^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/grpc.io/grpc-go/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GrpciogrpcgoPackage = typeof grpciogrpcgoPackage
