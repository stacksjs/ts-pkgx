/**
 * **sentry-cli** - Crafters of fine Open Source products
 *
 * @domain `sentry.io`
 *
 * @install `pkgx sentry.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sentryio
 * console.log(pkg.name)        // "sentry-cli"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sentry-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sentryioPackage = {
  /**
   * The display name of this package.
   */
  name: 'sentry-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sentry.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sentry.io' as const,
  fullPath: 'sentry.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sentry.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SentryioPackage = typeof sentryioPackage
