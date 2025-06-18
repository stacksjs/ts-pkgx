/**
 * **mcmc-jags.sourceforge.io** - Package from pantry: mcmc-jags.sourceforge.io
 *
 * @domain `mcmc-jags.sourceforge.io`
 *
 * @install `launchpad install mcmc-jags.sourceforge.io`
 * @dependencies `gnu.org/gcc`, `netlib.org/lapack^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mcmcjagssourceforgeio
 * console.log(pkg.name)        // "mcmc-jags.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: mcmc-jags.sourceforge.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mcmc-jags-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mcmcjagssourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'mcmc-jags.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mcmc-jags.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mcmc-jags.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mcmc-jags.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gcc',
    'netlib.org/lapack^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mcmc-jags.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type McmcjagssourceforgeioPackage = typeof mcmcjagssourceforgeioPackage
