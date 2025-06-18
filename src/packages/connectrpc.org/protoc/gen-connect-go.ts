/**
 * **connectrpc.org/protoc-gen-connect-go** - pkgx package
 *
 * @domain `connectrpc.org/protoc/gen-connect-go`
 *
 * @install `pkgx connectrpc.org/protoc-gen-connect-go`
 * @name `protoc-gen-connect-go`
 * @aliases `connectrpc.org/protoc-gen-connect-go`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.connectrpcorgprotocgenconnectgo
 * // Or access via domain
 * const samePkg = pantry.connectrpcorgprotocgenconnectgo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "protoc-gen-connect-go"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/connectrpc-org/protoc/gen-connect-go.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const connectrpcorgprotocgenconnectgoPackage = {
  /**
   * The display name of this package.
   */
  name: 'protoc-gen-connect-go' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'connectrpc.org/protoc/gen-connect-go' as const,
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
  installCommand: 'pkgx connectrpc.org/protoc-gen-connect-go' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'connectrpc.org/protoc-gen-connect-go',
  ] as const,
  fullPath: 'connectrpc.org/protoc-gen-connect-go' as const,
}

export type ConnectrpcorgprotocgenconnectgoPackage = typeof connectrpcorgprotocgenconnectgoPackage
