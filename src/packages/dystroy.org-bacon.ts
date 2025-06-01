/**
 * **dystroy.org-bacon** - Go home.
 *
 * @domain `dystroy.org-bacon`
 *
 * @install `pkgx dystroy.org-bacon`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dystroyorgbacon
 * console.log(pkg.name)        // "dystroy.org-bacon"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dystroy-org-bacon.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dystroyorgbaconPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/dystroy.org-bacon/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dystroy.org-bacon' as const,
  fullPath: 'dystroy.org-bacon' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dystroy.org-bacon' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DystroyorgbaconPackage = typeof dystroyorgbaconPackage
