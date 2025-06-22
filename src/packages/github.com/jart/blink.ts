/**
 * **blink** - tiniest x86-64-linux emulator
 *
 * @domain `github.com/jart/blink`
 * @programs `blink`, `blinkenlights`
 * @version `0.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install blink`
 * @name `blink`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.blink
 * // Or access via domain
 * const samePkg = pantry.githubcomjartblink
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "blink"
 * console.log(pkg.description) // "tiniest x86-64-linux emulator"
 * console.log(pkg.programs)    // ["blink", "blinkenlights"]
 * console.log(pkg.versions[0]) // "0.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jart/blink.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const blinkPackage = {
  /**
   * The display name of this package.
   */
  name: 'blink' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jart/blink' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'tiniest x86-64-linux emulator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jart/blink/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install blink' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'blink',
    'blinkenlights',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jart/blink -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install blink' as const,
}

export type BlinkPackage = typeof blinkPackage
