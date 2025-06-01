/**
 * **cb** - Crafters of fine Open Source products
 *
 * @domain `getclipboard.app`
 *
 * @install `pkgx getclipboard.app`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getclipboardapp
 * console.log(pkg.name)        // "cb"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getclipboard-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getclipboardappPackage = {
  /**
   * The display name of this package.
   */
  name: 'cb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/getclipboard.app/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getclipboard.app' as const,
  fullPath: 'getclipboard.app' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx getclipboard.app' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GetclipboardappPackage = typeof getclipboardappPackage
