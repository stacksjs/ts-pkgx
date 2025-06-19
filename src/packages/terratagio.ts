/**
 * **terratag** - Terratag is a CLI tool that enables users of Terraform to automatically create and maintain tags across their entire set of AWS, Azure, and GCP resources
 *
 * @domain `terratag.io`
 * @programs `terratag`
 * @version `0.7.2` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install terratag`
 * @aliases `terratag`
 * @dependencies `terraform.io>=0.12`, `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.terratag
 * // Or access via domain
 * const samePkg = pantry.terratagio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "terratag.io"
 * console.log(pkg.description) // "Terratag is a CLI tool that enables users of Te..."
 * console.log(pkg.programs)    // ["terratag"]
 * console.log(pkg.versions[0]) // "0.7.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terratag-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terratagPackage = {
  /**
   * The display name of this package.
   */
  name: 'terratag.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terratag.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terratag is a CLI tool that enables users of Terraform to automatically create and maintain tags across their entire set of AWS, Azure, and GCP resources' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/terratag.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install terratag' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'terratag',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'terraform.io>=0.12',
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.1',
    '0.6.0',
    '0.5.3',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.1',
    '0.4.0',
    '0.3.5',
    '0.3.4',
    '0.3.3',
    '0.3.2',
    '0.3.1',
    '0.3.0',
    '0.2.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'terratag',
  ] as const,
}

export type TerratagPackage = typeof terratagPackage
