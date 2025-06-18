/**
 * **stripe.com** - Package from pantry: stripe.com
 *
 * @domain `stripe.com`
 *
 * @install `launchpad install stripe.com`
 * @dependencies `go.dev^1.19`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.stripecom
 * console.log(pkg.name)        // "stripe.com"
 * console.log(pkg.description) // "Package from pantry: stripe.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/stripe-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stripecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'stripe.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'stripe.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: stripe.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install stripe.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/stripe.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type StripecomPackage = typeof stripecomPackage
