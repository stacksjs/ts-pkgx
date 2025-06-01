/**
 * **wezfurlong.org** - Go home.
 *
 * @domain `wezfurlong.org`
 *
 * @install `pkgx wezfurlong.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wezfurlongorg
 * console.log(pkg.name)        // "wezfurlong.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wezfurlong-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wezfurlongorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/wezfurlong.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wezfurlong.org' as const,
  fullPath: 'wezfurlong.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wezfurlong.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WezfurlongorgPackage = typeof wezfurlongorgPackage
