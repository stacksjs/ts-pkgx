/**
 * **dart** - Crafters of fine Open Source products
 *
 * @domain `dart.dev`
 *
 * @install `pkgx dart.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dartdev
 * console.log(pkg.name)        // "dart"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dart-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dartdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'dart' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dart.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dart.dev' as const,
  fullPath: 'dart.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dart.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DartdevPackage = typeof dartdevPackage
