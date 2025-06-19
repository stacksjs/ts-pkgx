/**
 * **eureka** - 💡 CLI tool to input and store your ideas without leaving the terminal
 *
 * @domain `crates.io/eureka`
 * @programs `eureka`
 * @version `2.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install eureka`
 * @name `eureka`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.eureka
 * // Or access via domain
 * const samePkg = pantry.cratesioeureka
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eureka"
 * console.log(pkg.description) // "💡 CLI tool to input and store your ideas witho..."
 * console.log(pkg.programs)    // ["eureka"]
 * console.log(pkg.versions[0]) // "2.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/eureka.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eurekaPackage = {
  /**
   * The display name of this package.
   */
  name: 'eureka' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/eureka' as const,
  /**
   * Brief description of what this package does.
   */
  description: '💡 CLI tool to input and store your ideas without leaving the terminal' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/eureka/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install eureka' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'eureka',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type EurekaPackage = typeof eurekaPackage
