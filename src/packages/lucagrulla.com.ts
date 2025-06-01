/**
 * **lucagrulla.com** - Go home.
 *
 * @domain `lucagrulla.com`
 *
 * @install `pkgx lucagrulla.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lucagrullacom
 * console.log(pkg.name)        // "lucagrulla.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lucagrulla-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lucagrullacomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/lucagrulla.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lucagrulla.com' as const,
  fullPath: 'lucagrulla.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lucagrulla.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LucagrullacomPackage = typeof lucagrullacomPackage
