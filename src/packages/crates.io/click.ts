/**
 * **click** - The "Command Line Interactive Controller for Kubernetes"
 *
 * @domain `crates.io/click`
 * @programs `click`
 * @version `0.6.3` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install click`
 * @name `click`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.click
 * // Or access via domain
 * const samePkg = pantry.cratesioclick
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "click"
 * console.log(pkg.description) // "The "Command Line Interactive Controller for Ku..."
 * console.log(pkg.programs)    // ["click"]
 * console.log(pkg.versions[0]) // "0.6.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/click.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const clickPackage = {
  /**
   * The display name of this package.
   */
  name: 'click' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/click' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The "Command Line Interactive Controller for Kubernetes"' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/click/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install click' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'click',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.3',
    '0.6.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type ClickPackage = typeof clickPackage
