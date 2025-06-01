/**
 * **node** - Crafters of fine Open Source products
 *
 * @domain `nodejs.org`
 *
 * @install `pkgx nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nodejsorg
 * console.log(pkg.name)        // "node"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nodejs-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nodejsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'node' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nodejs.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nodejs.org' as const,
  fullPath: 'nodejs.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nodejs.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NodejsorgPackage = typeof nodejsorgPackage
