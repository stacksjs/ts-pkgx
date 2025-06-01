/**
 * **github.com-peripheryapp-periphery** - Go home.
 *
 * @domain `github.com-peripheryapp-periphery`
 *
 * @install `pkgx github.com-peripheryapp-periphery`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomperipheryappperiphery
 * console.log(pkg.name)        // "github.com-peripheryapp-periphery"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-peripheryapp-periphery.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomperipheryappperipheryPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-peripheryapp-periphery/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-peripheryapp-periphery' as const,
  fullPath: 'github.com-peripheryapp-periphery' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-peripheryapp-periphery' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GithubcomperipheryappperipheryPackage = typeof githubcomperipheryappperipheryPackage
