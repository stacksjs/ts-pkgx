/**
 * **projectdiscovery.io** - Go home.
 *
 * @domain `projectdiscovery.io`
 *
 * @install `pkgx projectdiscovery.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.projectdiscoveryio
 * console.log(pkg.name)        // "projectdiscovery.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/projectdiscovery-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projectdiscoveryioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/projectdiscovery.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'projectdiscovery.io' as const,
  fullPath: 'projectdiscovery.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx projectdiscovery.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ProjectdiscoveryioPackage = typeof projectdiscoveryioPackage
