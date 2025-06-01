/**
 * **git.osgeo.org** - Go home.
 *
 * @domain `git.osgeo.org`
 *
 * @install `pkgx git.osgeo.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitosgeoorg
 * console.log(pkg.name)        // "git.osgeo.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-osgeo-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitosgeoorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/git.osgeo.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git.osgeo.org' as const,
  fullPath: 'git.osgeo.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx git.osgeo.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GitosgeoorgPackage = typeof gitosgeoorgPackage
