/**
 * **tfenv** - Terraform version manager
 *
 * @domain `github.com/tfutils/tfenv`
 * @programs `tfenv`
 * @version `3.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tfenv`
 * @name `tfenv`
 * @dependencies `gnu.org/grep`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tfenv
 * // Or access via domain
 * const samePkg = pantry.githubcomtfutilstfenv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tfenv"
 * console.log(pkg.description) // "Terraform version manager"
 * console.log(pkg.programs)    // ["tfenv"]
 * console.log(pkg.versions[0]) // "3.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/tfutils/tfenv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tfenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'tfenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/tfutils/tfenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terraform version manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/tfutils/tfenv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tfenv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tfenv',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/grep',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TfenvPackage = typeof tfenvPackage
