/**
 * **aquasecurity.github.io** - Go home.
 *
 * @domain `aquasecurity.github.io`
 *
 * @install `pkgx aquasecurity.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aquasecuritygithubio
 * console.log(pkg.name)        // "aquasecurity.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aquasecurity-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aquasecuritygithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/aquasecurity.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aquasecurity.github.io' as const,
  fullPath: 'aquasecurity.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx aquasecurity.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AquasecuritygithubioPackage = typeof aquasecuritygithubioPackage
