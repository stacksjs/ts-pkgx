/**
 * **msgpack.org** - Crafters of fine Open Source products
 *
 * @domain `msgpack.org`
 *
 * @install `pkgx msgpack.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.msgpackorg
 * console.log(pkg.name)        // "msgpack.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/msgpack-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const msgpackorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'msgpack.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/msgpack.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'msgpack.org' as const,
  fullPath: 'msgpack.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx msgpack.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MsgpackorgPackage = typeof msgpackorgPackage
