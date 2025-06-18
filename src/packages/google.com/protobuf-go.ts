/**
 * **protoc-gen-go** - Go support for Google's protocol buffers
 *
 * @domain `google.com/protobuf-go`
 * @programs `protoc-gen-go`
 * @version `1.36.6` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install protoc-gen-go`
 * @aliases `protoc-gen-go`
 * @dependencies `go.dev^1.17`, `go.dev`
 * @companions `protobuf.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.protocgengo
 * // Or access via domain
 * const samePkg = pantry.googlecomprotobufgo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "protobuf-go"
 * console.log(pkg.description) // "Go support for Google's protocol buffers"
 * console.log(pkg.programs)    // ["protoc-gen-go"]
 * console.log(pkg.versions[0]) // "1.36.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/protobuf-go.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protocgengoPackage = {
  /**
   * The display name of this package.
   */
  name: 'protobuf-go' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/protobuf-go' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go support for Google\'s protocol buffers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/protobuf-go/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install protoc-gen-go' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'protoc-gen-go',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'protobuf.dev',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.17',
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.36.6',
    '1.36.5',
    '1.36.4',
    '1.36.3',
    '1.36.2',
    '1.36.1',
    '1.36.0',
    '1.35.2',
    '1.35.1',
    '1.34.2',
    '1.34.1',
    '1.34.0',
    '1.33.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'protoc-gen-go',
  ] as const,
}

export type ProtocgengoPackage = typeof protocgengoPackage
