/**
 * **jags** - Crafters of fine Open Source products
 *
 * @domain `mcmc-jags.sourceforge.io`
 *
 * @install `pkgx mcmc-jags.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mcmcjagssourceforgeio
 * console.log(pkg.name)        // "jags"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mcmc-jags-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mcmcjagssourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'jags' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mcmc-jags.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mcmc-jags.sourceforge.io' as const,
  fullPath: 'mcmc-jags.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mcmc-jags.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type McmcjagssourceforgeioPackage = typeof mcmcjagssourceforgeioPackage
