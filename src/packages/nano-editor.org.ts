/**
 * **nano** - Crafters of fine Open Source products
 *
 * @domain `nano-editor.org`
 *
 * @install `pkgx nano-editor.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nanoeditororg
 * console.log(pkg.name)        // "nano"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nano-editor-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nanoeditororgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nano' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nano-editor.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nano-editor.org' as const,
  fullPath: 'nano-editor.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nano-editor.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NanoeditororgPackage = typeof nanoeditororgPackage
