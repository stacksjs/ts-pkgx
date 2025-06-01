/**
 * **modernc.org** - Go home.
 *
 * @domain `modernc.org`
 *
 * @install `pkgx modernc.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.moderncorg
 * console.log(pkg.name)        // "modernc.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/modernc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const moderncorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/modernc.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'modernc.org' as const,
  fullPath: 'modernc.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx modernc.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ModerncorgPackage = typeof moderncorgPackage
