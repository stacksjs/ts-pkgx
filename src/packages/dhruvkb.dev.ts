/**
 * **dhruvkb.dev** - Go home.
 *
 * @domain `dhruvkb.dev`
 *
 * @install `pkgx dhruvkb.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dhruvkbdev
 * console.log(pkg.name)        // "dhruvkb.dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dhruvkb-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dhruvkbdevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/dhruvkb.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dhruvkb.dev' as const,
  fullPath: 'dhruvkb.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dhruvkb.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DhruvkbdevPackage = typeof dhruvkbdevPackage
