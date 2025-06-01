/**
 * **go.uber.org** - Go home.
 *
 * @domain `go.uber.org`
 *
 * @install `pkgx go.uber.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gouberorg
 * console.log(pkg.name)        // "go.uber.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-uber-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gouberorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/go.uber.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.uber.org' as const,
  fullPath: 'go.uber.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx go.uber.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GouberorgPackage = typeof gouberorgPackage
