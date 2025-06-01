/**
 * **hugo.wang** - Go home.
 *
 * @domain `hugo.wang`
 *
 * @install `pkgx hugo.wang`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hugowang
 * console.log(pkg.name)        // "hugo.wang"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hugo-wang.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hugowangPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/hugo.wang/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hugo.wang' as const,
  fullPath: 'hugo.wang' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hugo.wang' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HugowangPackage = typeof hugowangPackage
