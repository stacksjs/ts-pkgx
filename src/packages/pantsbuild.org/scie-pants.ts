/**
 * **pants** - Protects your Pants from the elements.
 *
 * @domain `pantsbuild.org/scie-pants`
 * @programs `pants`
 * @version `0.12.5` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pants`
 * @name `scie-pants`
 * @aliases `pants`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pants
 * // Or access via domain
 * const samePkg = pantry.pantsbuildorgsciepants
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "scie-pants"
 * console.log(pkg.description) // "Protects your Pants from the elements."
 * console.log(pkg.programs)    // ["pants"]
 * console.log(pkg.versions[0]) // "0.12.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pantsbuild-org/scie-pants.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pantsPackage = {
  /**
   * The display name of this package.
   */
  name: 'scie-pants' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pantsbuild.org/scie-pants' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Protects your Pants from the elements.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pantsbuild.org/scie-pants/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pants' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pants',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.12.5',
    '0.12.3',
    '0.12.2',
    '0.12.1',
    '0.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pants',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pants -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pants' as const,
}

export type PantsPackage = typeof pantsPackage
