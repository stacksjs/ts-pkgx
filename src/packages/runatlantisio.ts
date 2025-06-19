/**
 * **atlantis** - Terraform Pull Request Automation tool
 *
 * @domain `runatlantis.io`
 * @programs `atlantis`
 * @version `0.34.0` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install atlantis`
 * @aliases `atlantis`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.atlantis
 * // Or access via domain
 * const samePkg = pantry.runatlantisio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "runatlantis.io"
 * console.log(pkg.description) // "Terraform Pull Request Automation tool"
 * console.log(pkg.programs)    // ["atlantis"]
 * console.log(pkg.versions[0]) // "0.34.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/runatlantis-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const atlantisPackage = {
  /**
   * The display name of this package.
   */
  name: 'runatlantis.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'runatlantis.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terraform Pull Request Automation tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/runatlantis.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install atlantis' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'atlantis',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.34.0',
    '0.33.0',
    '0.32.0',
    '0.31.0',
    '0.30.0',
    '0.29.0',
    '0.28.5',
    '0.28.4',
    '0.28.3',
    '0.28.2',
    '0.28.1',
    '0.28.0',
    '0.27.3',
    '0.27.2',
    '0.27.1',
    '0.27.0',
    '0.26.0',
    '0.25.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'atlantis',
  ] as const,
}

export type AtlantisPackage = typeof atlantisPackage
