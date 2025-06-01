/**
 * **github.com-peak-s5cmd** - Go home.
 *
 * @domain `github.com-peak-s5cmd`
 *
 * @install `pkgx github.com-peak-s5cmd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompeaks5cmd
 * console.log(pkg.name)        // "github.com-peak-s5cmd"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com-peak-s5cmd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompeaks5cmdPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/github.com-peak-s5cmd/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com-peak-s5cmd' as const,
  fullPath: 'github.com-peak-s5cmd' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com-peak-s5cmd' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Githubcompeaks5cmdPackage = typeof githubcompeaks5cmdPackage
