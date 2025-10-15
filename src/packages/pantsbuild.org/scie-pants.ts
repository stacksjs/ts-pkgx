/**
 * **scie-pants** - Protects your Pants from the elements.
 *
 * @domain `pantsbuild.org/scie-pants`
 * @programs `pants`
 * @version `0.12.5` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pantsbuild.org/scie-pants`
 * @homepage https://www.pantsbuild.org/docs/installation
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pantsbuildorgsciepants
 * console.log(pkg.name)        // "scie-pants"
 * console.log(pkg.description) // "Protects your Pants from the elements."
 * console.log(pkg.programs)    // ["pants"]
 * console.log(pkg.versions[0]) // "0.12.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pantsbuild-org/scie-pants.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pantsbuildorgsciepantsPackage = {
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
  homepageUrl: 'https://www.pantsbuild.org/docs/installation' as const,
  githubUrl: 'https://github.com/pantsbuild/scie-pants' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pantsbuild.org/scie-pants' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pantsbuild.org/scie-pants -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pantsbuild.org/scie-pants' as const,
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
  aliases: [] as const,
}

export type PantsbuildorgsciepantsPackage = typeof pantsbuildorgsciepantsPackage
