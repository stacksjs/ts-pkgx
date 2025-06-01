/**
 * **certbot** - Crafters of fine Open Source products
 *
 * @domain `certbot.eff.org`
 *
 * @install `pkgx certbot.eff.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.certbotefforg
 * console.log(pkg.name)        // "certbot"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/certbot-eff-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const certbotefforgPackage = {
  /**
   * The display name of this package.
   */
  name: 'certbot' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/certbot.eff.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'certbot.eff.org' as const,
  fullPath: 'certbot.eff.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx certbot.eff.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CertbotefforgPackage = typeof certbotefforgPackage
