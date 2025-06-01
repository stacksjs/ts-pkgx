/**
 * **lavinmq** - Crafters of fine Open Source products
 *
 * @domain `lavinmq.com`
 *
 * @install `pkgx lavinmq.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lavinmqcom
 * console.log(pkg.name)        // "lavinmq"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lavinmq-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lavinmqcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'lavinmq' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/lavinmq.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lavinmq.com' as const,
  fullPath: 'lavinmq.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lavinmq.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LavinmqcomPackage = typeof lavinmqcomPackage
