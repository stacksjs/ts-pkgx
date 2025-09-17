/**
 * **versitygw** - versity s3 gateway
 *
 * @domain `versity.com/versitygw`
 * @programs `versitygw`
 * @version `1.0.18` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install versitygw`
 * @name `versitygw`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.versitygw
 * // Or access via domain
 * const samePkg = pantry.versitycomversitygw
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "versitygw"
 * console.log(pkg.description) // "versity s3 gateway"
 * console.log(pkg.programs)    // ["versitygw"]
 * console.log(pkg.versions[0]) // "1.0.18" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/versity-com/versitygw.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const versitygwPackage = {
  /**
   * The display name of this package.
   */
  name: 'versitygw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'versity.com/versitygw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'versity s3 gateway' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/versity.com/versitygw/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install versitygw' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'versitygw',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.18',
    '1.0.17',
    '1.0.16',
    '1.0.15',
    '1.0.14',
    '1.0.13',
    '1.0.12',
    '1.0.11',
    '1.0.10',
    '1.0.9',
    '1.0.8',
    '1.0.7',
    '1.0.6',
    '1.0.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) versitygw -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install versitygw' as const,
}

export type VersitygwPackage = typeof versitygwPackage
