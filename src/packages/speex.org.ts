/**
 * **speexdec** - Crafters of fine Open Source products
 *
 * @domain `speex.org`
 *
 * @install `pkgx speex.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.speexorg
 * console.log(pkg.name)        // "speexdec"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/speex-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const speexorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'speexdec' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/speex.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'speex.org' as const,
  fullPath: 'speex.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx speex.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SpeexorgPackage = typeof speexorgPackage
