/**
 * **augeas.net** - Crafters of fine Open Source products
 *
 * @domain `augeas.net`
 *
 * @install `pkgx augeas.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.augeasnet
 * console.log(pkg.name)        // "augeas.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/augeas-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const augeasnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'augeas.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/augeas.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'augeas.net' as const,
  fullPath: 'augeas.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx augeas.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AugeasnetPackage = typeof augeasnetPackage
