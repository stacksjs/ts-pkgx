/**
 * **opa** - Crafters of fine Open Source products
 *
 * @domain `openpolicyagent.org`
 *
 * @install `pkgx openpolicyagent.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openpolicyagentorg
 * console.log(pkg.name)        // "opa"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openpolicyagent-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openpolicyagentorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'opa' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openpolicyagent.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openpolicyagent.org' as const,
  fullPath: 'openpolicyagent.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openpolicyagent.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenpolicyagentorgPackage = typeof openpolicyagentorgPackage
