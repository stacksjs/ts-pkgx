/**
 * **creativeprojects.github.io** - Go home.
 *
 * @domain `creativeprojects.github.io`
 *
 * @install `pkgx creativeprojects.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.creativeprojectsgithubio
 * console.log(pkg.name)        // "creativeprojects.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/creativeprojects-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const creativeprojectsgithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/creativeprojects.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'creativeprojects.github.io' as const,
  fullPath: 'creativeprojects.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx creativeprojects.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CreativeprojectsgithubioPackage = typeof creativeprojectsgithubioPackage
