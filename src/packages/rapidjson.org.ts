/**
 * **rapidjson.org** - Crafters of fine Open Source products
 *
 * @domain `rapidjson.org`
 *
 * @install `pkgx rapidjson.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rapidjsonorg
 * console.log(pkg.name)        // "rapidjson.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rapidjson-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rapidjsonorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rapidjson.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rapidjson.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rapidjson.org' as const,
  fullPath: 'rapidjson.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rapidjson.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RapidjsonorgPackage = typeof rapidjsonorgPackage
