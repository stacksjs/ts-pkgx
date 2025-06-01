/**
 * **digitalocean.com** - Go home.
 *
 * @domain `digitalocean.com`
 *
 * @install `pkgx digitalocean.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.digitaloceancom
 * console.log(pkg.name)        // "digitalocean.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/digitalocean-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const digitaloceancomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/digitalocean.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'digitalocean.com' as const,
  fullPath: 'digitalocean.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx digitalocean.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DigitaloceancomPackage = typeof digitaloceancomPackage
