/**
 * **google.com/protobuf-go** - pkgx package
 *
 * @domain `google.com/protobuf/go`
 *
 * @install `pkgx google.com/protobuf-go`
 * @name `protobuf-go`
 * @aliases `google.com/protobuf-go`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.googlecomprotobufgo
 * // Or access via domain
 * const samePkg = pantry.googlecomprotobufgo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "protobuf-go"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/protobuf/go.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomprotobufgoPackage = {
  /**
   * The display name of this package.
   */
  name: 'protobuf-go' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/protobuf/go' as const,
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
  installCommand: 'pkgx google.com/protobuf-go' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'google.com/protobuf-go',
  ] as const,
  fullPath: 'google.com/protobuf-go' as const,
}

export type GooglecomprotobufgoPackage = typeof googlecomprotobufgoPackage
