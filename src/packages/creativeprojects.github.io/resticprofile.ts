/**
 * **resticprofile** - Configuration profiles manager and scheduler for restic backup
 *
 * @domain `creativeprojects.github.io/resticprofile`
 * @programs `resticprofile`
 * @version `0.31.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install resticprofile`
 * @name `resticprofile`
 * @companions `restic.net/restic`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.resticprofile
 * // Or access via domain
 * const samePkg = pantry.creativeprojectsgithubioresticprofile
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "resticprofile"
 * console.log(pkg.description) // "Configuration profiles manager and scheduler fo..."
 * console.log(pkg.programs)    // ["resticprofile"]
 * console.log(pkg.versions[0]) // "0.31.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/creativeprojects-github-io/resticprofile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const resticprofilePackage = {
  /**
   * The display name of this package.
   */
  name: 'resticprofile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'creativeprojects.github.io/resticprofile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Configuration profiles manager and scheduler for restic backup' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/creativeprojects.github.io/resticprofile/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install resticprofile' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'resticprofile',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'restic.net/restic',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.31.0',
    '0.30.1',
    '0.30.0',
    '0.29.1',
    '0.29.0',
    '0.28.1',
    '0.28.0',
    '0.27.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) resticprofile -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install resticprofile' as const,
}

export type ResticprofilePackage = typeof resticprofilePackage
