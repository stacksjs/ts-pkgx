/**
 * **wget** - Internet file retriever
 *
 * @domain `gnu.org/wget`
 * @programs `wget`
 * @version `1.25.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install wget`
 * @name `wget`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.wget
 * // Or access via domain
 * const samePkg = pantry.gnuorgwget
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wget"
 * console.log(pkg.description) // "Internet file retriever"
 * console.log(pkg.programs)    // ["wget"]
 * console.log(pkg.versions[0]) // "1.25.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/wget.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wgetPackage = {
  /**
   * The display name of this package.
   */
  name: 'wget' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/wget' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Internet file retriever' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/wget/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install wget' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wget',
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
    '1.25.0',
    '1.24.5',
    '1.21.4',
    '1.21.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type WgetPackage = typeof wgetPackage
