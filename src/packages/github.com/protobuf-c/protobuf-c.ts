/**
 * **protoc** - Protocol Buffers implementation in C
 *
 * @domain `github.com/protobuf-c/protobuf-c`
 * @programs `protoc-c`, `protoc-gen-c`
 * @version `1.5.2` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install protoc`
 * @name `protoc`
 * @dependencies `protobuf.dev^25.1`, `abseil.io^20250127`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.protoc
 * // Or access via domain
 * const samePkg = pantry.githubcomprotobufcprotobufc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "protoc"
 * console.log(pkg.description) // "Protocol Buffers implementation in C"
 * console.log(pkg.programs)    // ["protoc-c", "protoc-gen-c"]
 * console.log(pkg.versions[0]) // "1.5.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/protobuf-c/protobuf-c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protocPackage = {
  /**
   * The display name of this package.
   */
  name: 'protoc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/protobuf-c/protobuf-c' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Protocol Buffers implementation in C' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/protobuf-c/protobuf-c/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install protoc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'protoc-c',
    'protoc-gen-c',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'protobuf.dev^25.1',
    'abseil.io^20250127',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.2',
    '1.5.1',
    '1.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/protobuf-c/protobuf-c -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install protoc' as const,
}

export type ProtocPackage = typeof protocPackage
