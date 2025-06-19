/**
 * **protoc-gen-connect-go** - The Go implementation of Connect: Protobuf RPC that works.
 *
 * @domain `connectrpc.org/protoc-gen-connect-go`
 * @programs `protoc-gen-connect-go`
 * @version `1.18.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install protoc-gen-connect-go`
 * @name `protoc-gen-connect-go`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.protocgenconnectgo
 * // Or access via domain
 * const samePkg = pantry.connectrpcorgprotocgenconnectgo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "protoc-gen-connect-go"
 * console.log(pkg.description) // "The Go implementation of Connect: Protobuf RPC ..."
 * console.log(pkg.programs)    // ["protoc-gen-connect-go"]
 * console.log(pkg.versions[0]) // "1.18.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/connectrpc-org/protoc-gen-connect-go.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protocgenconnectgoPackage = {
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
  description: 'The Go implementation of Connect: Protobuf RPC that works.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/connectrpc.org/protoc-gen-connect-go/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install protoc-gen-connect-go' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'protoc-gen-connect-go',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.18.1',
    '1.18.0',
    '1.17.0',
    '1.16.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type ProtocgenconnectgoPackage = typeof protocgenconnectgoPackage
