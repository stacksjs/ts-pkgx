/**
 * **opus-codec.org** - Crafters of fine Open Source products
 *
 * @domain `opus-codec.org`
 *
 * @install `pkgx opus-codec.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opuscodecorg
 * console.log(pkg.name)        // "opus-codec.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opus-codec-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opuscodecorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'opus-codec.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/opus-codec.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opus-codec.org' as const,
  fullPath: 'opus-codec.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx opus-codec.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpuscodecorgPackage = typeof opuscodecorgPackage
