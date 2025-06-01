/**
 * **certifi.io** - Go home.
 *
 * @domain `certifi.io`
 *
 * @install `pkgx certifi.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.certifiio
 * console.log(pkg.name)        // "certifi.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/certifi-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const certifiioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/certifi.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'certifi.io' as const,
  fullPath: 'certifi.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx certifi.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CertifiioPackage = typeof certifiioPackage
