/**
 * **eb** - Client for Amazon Elastic Beanstalk web service
 *
 * @domain `crates.io/eb`
 * @programs `eb`
 * @version `0.5.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install eb`
 * @name `eb`
 * @dependencies `rust-lang.org>=1.65`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.eb
 * // Or access via domain
 * const samePkg = pantry.cratesioeb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eb"
 * console.log(pkg.description) // "Client for Amazon Elastic Beanstalk web service"
 * console.log(pkg.programs)    // ["eb"]
 * console.log(pkg.versions[0]) // "0.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/eb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ebPackage = {
  /**
   * The display name of this package.
   */
  name: 'eb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/eb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Client for Amazon Elastic Beanstalk web service' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/eb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install eb' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'eb',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.65',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type EbPackage = typeof ebPackage
