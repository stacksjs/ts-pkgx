/**
 * **pwmt.org** - Go home.
 *
 * @domain `pwmt.org`
 *
 * @install `pkgx pwmt.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pwmtorg
 * console.log(pkg.name)        // "pwmt.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pwmt-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pwmtorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/pwmt.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pwmt.org' as const,
  fullPath: 'pwmt.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pwmt.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PwmtorgPackage = typeof pwmtorgPackage
