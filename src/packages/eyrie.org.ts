/**
 * **eyrie.org** - Go home.
 *
 * @domain `eyrie.org`
 *
 * @install `pkgx eyrie.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.eyrieorg
 * console.log(pkg.name)        // "eyrie.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/eyrie-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eyrieorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/eyrie.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'eyrie.org' as const,
  fullPath: 'eyrie.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx eyrie.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type EyrieorgPackage = typeof eyrieorgPackage
