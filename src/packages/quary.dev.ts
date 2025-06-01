/**
 * **quary.dev** - Go home.
 *
 * @domain `quary.dev`
 *
 * @install `pkgx quary.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.quarydev
 * console.log(pkg.name)        // "quary.dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/quary-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const quarydevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/quary.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'quary.dev' as const,
  fullPath: 'quary.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx quary.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type QuarydevPackage = typeof quarydevPackage
