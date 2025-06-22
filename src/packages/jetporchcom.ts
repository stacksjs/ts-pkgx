/**
 * **jetp** - Read-only mirror: see https://www.jetporch.com/community/sourcehut
 *
 * @domain `jetporch.com`
 * @programs `jetp`
 * @version `0.0.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jetp`
 * @name `jetp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jetp
 * // Or access via domain
 * const samePkg = pantry.jetporchcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jetp"
 * console.log(pkg.description) // "Read-only mirror: see https://www.jetporch.com/..."
 * console.log(pkg.programs)    // ["jetp"]
 * console.log(pkg.versions[0]) // "0.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jetporch-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jetpPackage = {
  /**
   * The display name of this package.
   */
  name: 'jetp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jetporch.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Read-only mirror: see https://www.jetporch.com/community/sourcehut' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jetporch.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jetp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jetp',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) jetp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jetp' as const,
}

export type JetpPackage = typeof jetpPackage
