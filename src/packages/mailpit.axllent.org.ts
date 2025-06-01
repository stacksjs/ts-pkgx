/**
 * **mailpit** - Crafters of fine Open Source products
 *
 * @domain `mailpit.axllent.org`
 *
 * @install `pkgx mailpit.axllent.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mailpitaxllentorg
 * console.log(pkg.name)        // "mailpit"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mailpit-axllent-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mailpitaxllentorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mailpit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mailpit.axllent.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mailpit.axllent.org' as const,
  fullPath: 'mailpit.axllent.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mailpit.axllent.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MailpitaxllentorgPackage = typeof mailpitaxllentorgPackage
