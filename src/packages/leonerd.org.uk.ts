/**
 * **leonerd.org.uk** - Go home.
 *
 * @domain `leonerd.org.uk`
 *
 * @install `pkgx leonerd.org.uk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leonerdorguk
 * console.log(pkg.name)        // "leonerd.org.uk"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leonerd-org-uk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leonerdorgukPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/leonerd.org.uk/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leonerd.org.uk' as const,
  fullPath: 'leonerd.org.uk' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx leonerd.org.uk' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LeonerdorgukPackage = typeof leonerdorgukPackage
