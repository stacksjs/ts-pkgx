/**
 * **moonrepo.dev** - Go home.
 *
 * @domain `moonrepo.dev`
 *
 * @install `pkgx moonrepo.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.moonrepodev
 * console.log(pkg.name)        // "moonrepo.dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/moonrepo-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const moonrepodevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/moonrepo.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'moonrepo.dev' as const,
  fullPath: 'moonrepo.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx moonrepo.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MoonrepodevPackage = typeof moonrepodevPackage
