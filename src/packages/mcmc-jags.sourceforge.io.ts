/**
 * **jags** - Just Another Gibbs Sampler for Bayesian MCMC simulation
 *
 * @domain `mcmc-jags.sourceforge.io`
 * @programs `jags`
 * @version `4.3.2` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/mcmc-jags-sourceforge-io.md
 *
 * @install `sh <(curl https://pkgx.sh) jags`
 * @name `jags`
 * @dependencies `gnu.org/gcc`, `linuxnetlib.org/lapack^3`, `netlib.org/lapack^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jags
 * // Or access via domain
 * const samePkg = pantry.mcmcjagssourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jags"
 * console.log(pkg.description) // "Just Another Gibbs Sampler for Bayesian MCMC si..."
 * console.log(pkg.programs)    // ["jags"]
 * console.log(pkg.versions[0]) // "4.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mcmc-jags-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jagsPackage = {
  /**
   * The display name of this package.
   */
  name: 'jags' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mcmc-jags.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Just Another Gibbs Sampler for Bayesian MCMC simulation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mcmc-jags.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) jags' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jags',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gcc',
    'linuxnetlib.org/lapack^3',
    'netlib.org/lapack^3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.3.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'mcmc-jags.sourceforge.io' as const,
}

export type JagsPackage = typeof jagsPackage
