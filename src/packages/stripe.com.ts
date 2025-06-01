/**
 * **stripe** - Crafters of fine Open Source products
 *
 * @domain `stripe.com`
 *
 * @install `pkgx stripe.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.stripecom
 * console.log(pkg.name)        // "stripe"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/stripe-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stripecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'stripe' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/stripe.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'stripe.com' as const,
  fullPath: 'stripe.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx stripe.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type StripecomPackage = typeof stripecomPackage
