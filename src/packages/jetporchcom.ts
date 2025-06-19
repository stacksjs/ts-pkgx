/**
 * **jetp** - Read-only mirror: see https://www.jetporch.com/community/sourcehut
 *
 * @domain `jetporch.com`
 * @programs `jetp`
 * @version `0.0.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jetp`
 * @aliases `jetp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jetp
 * // Or access via domain
 * const samePkg = pantry.jetporchcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jetporch.com"
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
  name: 'jetporch.com' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
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
  aliases: [
    'jetp',
  ] as const,
}

export type JetpPackage = typeof jetpPackage
