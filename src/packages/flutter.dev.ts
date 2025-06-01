/**
 * **flutter.dev** - Crafters of fine Open Source products
 *
 * @domain `flutter.dev`
 *
 * @install `pkgx flutter.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.flutterdev
 * console.log(pkg.name)        // "flutter.dev"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flutter-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flutterdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'flutter.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/flutter.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flutter.dev' as const,
  fullPath: 'flutter.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx flutter.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FlutterdevPackage = typeof flutterdevPackage
