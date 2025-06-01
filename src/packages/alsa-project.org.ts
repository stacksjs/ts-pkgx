/**
 * **alsa-project.org** - Go home.
 *
 * @domain `alsa-project.org`
 *
 * @install `pkgx alsa-project.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.alsaprojectorg
 * console.log(pkg.name)        // "alsa-project.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/alsa-project-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const alsaprojectorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/alsa-project.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'alsa-project.org' as const,
  fullPath: 'alsa-project.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx alsa-project.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AlsaprojectorgPackage = typeof alsaprojectorgPackage
