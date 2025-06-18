/**
 * **infracost** - Cloud cost estimates for Terraform in pull requests💰📉 Shift FinOps Left!
 *
 * @domain `infracost.io`
 * @programs `infracost`
 * @version `0.10.41` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) infracost`
 * @name `infracost`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.infracost
 * // Or access via domain
 * const samePkg = pantry.infracostio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "infracost"
 * console.log(pkg.description) // "Cloud cost estimates for Terraform in pull requ..."
 * console.log(pkg.programs)    // ["infracost"]
 * console.log(pkg.versions[0]) // "0.10.41" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/infracost-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const infracostPackage = {
  /**
   * The display name of this package.
   */
  name: 'infracost' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'infracost.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Cloud cost estimates for Terraform in pull requests💰📉 Shift FinOps Left!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/infracost.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) infracost' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'infracost',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.41',
    '0.10.40',
    '0.10.39',
    '0.10.38',
    '0.10.37',
    '0.10.36',
    '0.10.35',
    '0.10.34',
    '0.10.33',
    '0.10.32',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'infracost' as const,
}

export type InfracostPackage = typeof infracostPackage
