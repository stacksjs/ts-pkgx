/**
 * **protobuf-c** - pkgx package
 *
 * @domain `github.com/protobuf-c`
 *
 * @install `pkgx github.com/protobuf-c`
 * @name `protobuf-c`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.protobufc
 * // Or access via domain
 * const samePkg = pantry.githubcomprotobufc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "protobuf-c"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/protobuf-c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protobufcPackage = {
  /**
   * The display name of this package.
   */
  name: 'protobuf-c' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/protobuf-c' as const,
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
  installCommand: 'pkgx github.com/protobuf-c' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/protobuf-c' as const,
}

export type ProtobufcPackage = typeof protobufcPackage
