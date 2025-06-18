/**
 * **epsilon** - Powerful wavelet image compressor
 *
 * @domain `epsilon-project.sourceforge.io`
 * @programs `epsilon`
 * @version `0.9.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) epsilon`
 * @name `epsilon`
 * @dependencies `rpm.org/popt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.epsilon
 * // Or access via domain
 * const samePkg = pantry.epsilonprojectsourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "epsilon"
 * console.log(pkg.description) // "Powerful wavelet image compressor"
 * console.log(pkg.programs)    // ["epsilon"]
 * console.log(pkg.versions[0]) // "0.9.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/epsilon-project-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const epsilonPackage = {
  /**
   * The display name of this package.
   */
  name: 'epsilon' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'epsilon-project.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Powerful wavelet image compressor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/epsilon-project.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) epsilon' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'epsilon',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rpm.org/popt',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'epsilon' as const,
}

export type EpsilonPackage = typeof epsilonPackage
