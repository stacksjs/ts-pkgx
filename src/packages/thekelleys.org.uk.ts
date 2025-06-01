/**
 * **thekelleys.org.uk** - Go home.
 *
 * @domain `thekelleys.org.uk`
 *
 * @install `pkgx thekelleys.org.uk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.thekelleysorguk
 * console.log(pkg.name)        // "thekelleys.org.uk"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/thekelleys-org-uk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thekelleysorgukPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/thekelleys.org.uk/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'thekelleys.org.uk' as const,
  fullPath: 'thekelleys.org.uk' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx thekelleys.org.uk' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ThekelleysorgukPackage = typeof thekelleysorgukPackage
