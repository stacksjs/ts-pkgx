/**
 * **Protocol** - Crafters of fine Open Source products
 *
 * @domain `protobuf.dev`
 *
 * @install `pkgx protobuf.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.protobufdev
 * console.log(pkg.name)        // "Protocol"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/protobuf-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protobufdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'Protocol' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/protobuf.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'protobuf.dev' as const,
  fullPath: 'protobuf.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx protobuf.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ProtobufdevPackage = typeof protobufdevPackage
