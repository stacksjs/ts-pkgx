/**
 * **fukuchi.org** - Go home.
 *
 * @domain `fukuchi.org`
 *
 * @install `pkgx fukuchi.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fukuchiorg
 * console.log(pkg.name)        // "fukuchi.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fukuchi-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fukuchiorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/fukuchi.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fukuchi.org' as const,
  fullPath: 'fukuchi.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fukuchi.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FukuchiorgPackage = typeof fukuchiorgPackage
