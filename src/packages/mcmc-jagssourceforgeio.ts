/**
 * **jags** - Just Another Gibbs Sampler for Bayesian MCMC simulation
 *
 * @domain `mcmc-jags.sourceforge.io`
 * @programs `jags`
 * @version `4.3.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jags`
 * @aliases `jags`
 * @dependencies `gnu.org/gcc`, `linux:netlib.org/lapack^3` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jags
 * // Or access via domain
 * const samePkg = pantry.mcmcjagssourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mcmc-jags.sourceforge.io"
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
  name: 'mcmc-jags.sourceforge.io' as const,
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
  installCommand: 'launchpad install jags' as const,
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
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'gnu.org/gcc',
    'linux:netlib.org/lapack^3',
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
  aliases: [
    'jags',
  ] as const,
}

export type JagsPackage = typeof jagsPackage
