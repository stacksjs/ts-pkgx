/**
 * **kpt** - Automate Kubernetes Configuration Editing
 *
 * @domain `kpt.dev`
 * @programs `kpt`
 * @version `0.39.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kpt`
 * @name `kpt`
 * @dependencies `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kpt
 * // Or access via domain
 * const samePkg = pantry.kptdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kpt"
 * console.log(pkg.description) // "Automate Kubernetes Configuration Editing"
 * console.log(pkg.programs)    // ["kpt"]
 * console.log(pkg.versions[0]) // "0.39.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kpt-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kptPackage = {
  /**
   * The display name of this package.
   */
  name: 'kpt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kpt.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Automate Kubernetes Configuration Editing' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kpt.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kpt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kpt',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.39.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) kpt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kpt' as const,
}

export type KptPackage = typeof kptPackage
