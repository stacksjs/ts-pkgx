/**
 * **cloudfoundry.org** - Go home.
 *
 * @domain `cloudfoundry.org`
 *
 * @install `pkgx cloudfoundry.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cloudfoundryorg
 * console.log(pkg.name)        // "cloudfoundry.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudfoundry-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cloudfoundryorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/cloudfoundry.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cloudfoundry.org' as const,
  fullPath: 'cloudfoundry.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cloudfoundry.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CloudfoundryorgPackage = typeof cloudfoundryorgPackage
