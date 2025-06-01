/**
 * **thrysoee.dk** - Go home.
 *
 * @domain `thrysoee.dk`
 *
 * @install `pkgx thrysoee.dk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.thrysoeedk
 * console.log(pkg.name)        // "thrysoee.dk"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/thrysoee-dk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thrysoeedkPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/thrysoee.dk/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'thrysoee.dk' as const,
  fullPath: 'thrysoee.dk' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx thrysoee.dk' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ThrysoeedkPackage = typeof thrysoeedkPackage
