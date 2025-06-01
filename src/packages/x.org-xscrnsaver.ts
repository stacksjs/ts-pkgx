/**
 * **x.org-xscrnsaver** - Go home.
 *
 * @domain `x.org-xscrnsaver`
 *
 * @install `pkgx x.org-xscrnsaver`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxscrnsaver
 * console.log(pkg.name)        // "x.org-xscrnsaver"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org-xscrnsaver.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxscrnsaverPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/x.org-xscrnsaver/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org-xscrnsaver' as const,
  fullPath: 'x.org-xscrnsaver' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx x.org-xscrnsaver' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type XorgxscrnsaverPackage = typeof xorgxscrnsaverPackage
