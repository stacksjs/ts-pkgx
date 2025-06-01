/**
 * **tailwindcss** - Crafters of fine Open Source products
 *
 * @domain `tailwindcss.com`
 *
 * @install `pkgx tailwindcss.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tailwindcsscom
 * console.log(pkg.name)        // "tailwindcss"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tailwindcss-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tailwindcsscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'tailwindcss' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tailwindcss.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tailwindcss.com' as const,
  fullPath: 'tailwindcss.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tailwindcss.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TailwindcsscomPackage = typeof tailwindcsscomPackage
