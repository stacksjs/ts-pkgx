/**
 * **sourceware.org** - Go home.
 *
 * @domain `sourceware.org`
 *
 * @install `pkgx sourceware.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourcewareorg
 * console.log(pkg.name)        // "sourceware.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceware-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourcewareorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/sourceware.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceware.org' as const,
  fullPath: 'sourceware.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sourceware.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SourcewareorgPackage = typeof sourcewareorgPackage
