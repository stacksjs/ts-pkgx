/**
 * **open-interpreter** - Crafters of fine Open Source products
 *
 * @domain `openinterpreter.com`
 *
 * @install `pkgx openinterpreter.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openinterpretercom
 * console.log(pkg.name)        // "open-interpreter"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openinterpreter-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openinterpretercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'open-interpreter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openinterpreter.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openinterpreter.com' as const,
  fullPath: 'openinterpreter.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openinterpreter.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpeninterpretercomPackage = typeof openinterpretercomPackage
