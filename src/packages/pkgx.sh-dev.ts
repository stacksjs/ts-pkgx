/**
 * **pkgx.sh-dev** - Go home.
 *
 * @domain `pkgx.sh-dev`
 *
 * @install `pkgx pkgx.sh-dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkgxshdev
 * console.log(pkg.name)        // "pkgx.sh-dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgxshdevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/pkgx.sh-dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh-dev' as const,
  fullPath: 'pkgx.sh-dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pkgx.sh-dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PkgxshdevPackage = typeof pkgxshdevPackage
