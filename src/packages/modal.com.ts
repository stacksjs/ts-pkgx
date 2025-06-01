/**
 * **modal.com** - Crafters of fine Open Source products
 *
 * @domain `modal.com`
 *
 * @install `pkgx modal.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.modalcom
 * console.log(pkg.name)        // "modal.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/modal-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const modalcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'modal.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/modal.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'modal.com' as const,
  fullPath: 'modal.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx modal.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ModalcomPackage = typeof modalcomPackage
