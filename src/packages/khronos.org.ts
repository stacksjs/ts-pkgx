/**
 * **khronos.org** - Go home.
 *
 * @domain `khronos.org`
 *
 * @install `pkgx khronos.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.khronosorg
 * console.log(pkg.name)        // "khronos.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khronosorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/khronos.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khronos.org' as const,
  fullPath: 'khronos.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx khronos.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KhronosorgPackage = typeof khronosorgPackage
