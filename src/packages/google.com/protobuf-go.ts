/**
 * **protoc-gen-go** - Go support for Google's protocol buffers
 *
 * @domain `google.com/protobuf-go`
 * @programs `protoc-gen-go`
 * @version `1.36.9` (16 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install protoc-gen-go`
 * @name `protoc-gen-go`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.protocgengo
 * // Or access via domain
 * const samePkg = pantry.googlecomprotobufgo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "protoc-gen-go"
 * console.log(pkg.description) // "Go support for Google's protocol buffers"
 * console.log(pkg.programs)    // ["protoc-gen-go"]
 * console.log(pkg.versions[0]) // "1.36.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/protobuf-go.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protocgengoPackage = {
  /**
   * The display name of this package.
   */
  name: 'protoc-gen-go' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install protoc-gen-go' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'protoc-gen-go',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.36.9',
    '1.36.8',
    '1.36.7',
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) protoc-gen-go -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install protoc-gen-go' as const,
}

export type ProtocgengoPackage = typeof protocgengoPackage
