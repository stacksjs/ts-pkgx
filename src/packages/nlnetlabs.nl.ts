/**
 * **nlnetlabs.nl** - Go home.
 *
 * @domain `nlnetlabs.nl`
 *
 * @install `pkgx nlnetlabs.nl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nlnetlabsnl
 * console.log(pkg.name)        // "nlnetlabs.nl"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nlnetlabs-nl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nlnetlabsnlPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/nlnetlabs.nl/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nlnetlabs.nl' as const,
  fullPath: 'nlnetlabs.nl' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nlnetlabs.nl' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NlnetlabsnlPackage = typeof nlnetlabsnlPackage
