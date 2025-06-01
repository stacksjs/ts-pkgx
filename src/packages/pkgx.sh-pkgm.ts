/**
 * **pkgx.sh-pkgm** - Go home.
 *
 * @domain `pkgx.sh-pkgm`
 *
 * @install `pkgx pkgx.sh-pkgm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkgxshpkgm
 * console.log(pkg.name)        // "pkgx.sh-pkgm"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh-pkgm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgxshpkgmPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/pkgx.sh-pkgm/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh-pkgm' as const,
  fullPath: 'pkgx.sh-pkgm' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pkgx.sh-pkgm' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PkgxshpkgmPackage = typeof pkgxshpkgmPackage
