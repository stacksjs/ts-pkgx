/**
 * **chiark.greenend.org.uk** - Go home.
 *
 * @domain `chiark.greenend.org.uk`
 *
 * @install `pkgx chiark.greenend.org.uk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.chiarkgreenendorguk
 * console.log(pkg.name)        // "chiark.greenend.org.uk"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chiark-greenend-org-uk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chiarkgreenendorgukPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/chiark.greenend.org.uk/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chiark.greenend.org.uk' as const,
  fullPath: 'chiark.greenend.org.uk' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx chiark.greenend.org.uk' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ChiarkgreenendorgukPackage = typeof chiarkgreenendorgukPackage
