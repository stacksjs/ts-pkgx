/**
 * **ko** - Crafters of fine Open Source products
 *
 * @domain `ko.build`
 *
 * @install `pkgx ko.build`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kobuild
 * console.log(pkg.name)        // "ko"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ko-build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kobuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'ko' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ko.build/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ko.build' as const,
  fullPath: 'ko.build' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ko.build' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KobuildPackage = typeof kobuildPackage
