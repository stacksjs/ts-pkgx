/**
 * **protoc-gen-connect-go** - Package from pantry: connectrpc.org/protoc-gen-connect-go
 *
 * @domain `connectrpc.org/protoc-gen-connect-go`
 *
 * @install `launchpad install connectrpc.org/protoc-gen-connect-go`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.connectrpcorgprotocgenconnectgo
 * console.log(pkg.name)        // "protoc-gen-connect-go"
 * console.log(pkg.description) // "Package from pantry: connectrpc.org/protoc-gen-..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/connectrpc-org/protoc-gen-connect-go.md
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
  domain: 'connectrpc.org/protoc-gen-connect-go' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: connectrpc.org/protoc-gen-connect-go' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install connectrpc.org/protoc-gen-connect-go' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +connectrpc.org/protoc-gen-connect-go -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install connectrpc.org/protoc-gen-connect-go' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/connectrpc.org/protoc-gen-connect-go/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ConnectrpcorgprotocgenconnectgoPackage = typeof connectrpcorgprotocgenconnectgoPackage
