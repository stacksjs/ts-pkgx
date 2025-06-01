/**
 * **rabbitmq.com** - Crafters of fine Open Source products
 *
 * @domain `rabbitmq.com`
 *
 * @install `pkgx rabbitmq.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rabbitmqcom
 * console.log(pkg.name)        // "rabbitmq.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rabbitmq-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rabbitmqcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'rabbitmq.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rabbitmq.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rabbitmq.com' as const,
  fullPath: 'rabbitmq.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rabbitmq.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RabbitmqcomPackage = typeof rabbitmqcomPackage
