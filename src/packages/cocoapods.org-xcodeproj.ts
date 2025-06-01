/**
 * **cocoapods.org-xcodeproj** - Go home.
 *
 * @domain `cocoapods.org-xcodeproj`
 *
 * @install `pkgx cocoapods.org-xcodeproj`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cocoapodsorgxcodeproj
 * console.log(pkg.name)        // "cocoapods.org-xcodeproj"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cocoapods-org-xcodeproj.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cocoapodsorgxcodeprojPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cocoapods.org-xcodeproj/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cocoapods.org-xcodeproj' as const,
  fullPath: 'cocoapods.org-xcodeproj' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cocoapods.org-xcodeproj' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CocoapodsorgxcodeprojPackage = typeof cocoapodsorgxcodeprojPackage
