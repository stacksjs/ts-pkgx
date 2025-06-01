/**
 * **github.com-blynn-nex** - Go home.
 *
 * @domain `github.com-blynn-nex`
 *
 * @install `pkgx github.com-blynn-nex`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomblynnnex
 * console.log(pkg.name)        // "github.com-blynn-nex"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-blynn-nex.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomblynnnexPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-blynn-nex/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-blynn-nex' as const,
  fullPath: 'github.com-blynn-nex' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-blynn-nex' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomblynnnexPackage = typeof githubcomblynnnexPackage
