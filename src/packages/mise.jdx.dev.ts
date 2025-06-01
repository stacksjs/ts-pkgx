/**
 * **mise** - Crafters of fine Open Source products
 *
 * @domain `mise.jdx.dev`
 *
 * @install `pkgx mise.jdx.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.misejdxdev
 * console.log(pkg.name)        // "mise"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mise-jdx-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const misejdxdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'mise' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mise.jdx.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mise.jdx.dev' as const,
  fullPath: 'mise.jdx.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mise.jdx.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MisejdxdevPackage = typeof misejdxdevPackage
