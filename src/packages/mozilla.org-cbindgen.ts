/**
 * **mozilla.org-cbindgen** - Go home.
 *
 * @domain `mozilla.org-cbindgen`
 *
 * @install `pkgx mozilla.org-cbindgen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mozillaorgcbindgen
 * console.log(pkg.name)        // "mozilla.org-cbindgen"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org-cbindgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mozillaorgcbindgenPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/mozilla.org-cbindgen/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mozilla.org-cbindgen' as const,
  fullPath: 'mozilla.org-cbindgen' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mozilla.org-cbindgen' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MozillaorgcbindgenPackage = typeof mozillaorgcbindgenPackage
