/**
 * **github.com-shaka-project-shaka-packager** - Go home.
 *
 * @domain `github.com-shaka-project-shaka-packager`
 *
 * @install `pkgx github.com-shaka-project-shaka-packager`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomshakaprojectshakapackager
 * console.log(pkg.name)        // "github.com-shaka-project-shaka-packager"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-shaka-project-shaka-packager.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomshakaprojectshakapackagerPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-shaka-project-shaka-packager/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-shaka-project-shaka-packager' as const,
  fullPath: 'github.com-shaka-project-shaka-packager' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-shaka-project-shaka-packager' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomshakaprojectshakapackagerPackage = typeof githubcomshakaprojectshakapackagerPackage
