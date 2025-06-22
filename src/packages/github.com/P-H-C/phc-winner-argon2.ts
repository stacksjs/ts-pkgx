/**
 * **argon2** - The password hash Argon2, winner of PHC
 *
 * @domain `github.com/P-H-C/phc-winner-argon2`
 * @programs `argon2`
 * @version `20190702.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install argon2`
 * @name `argon2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.argon2
 * // Or access via domain
 * const samePkg = pantry.githubcomphcphcwinnerargon2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "argon2"
 * console.log(pkg.description) // "The password hash Argon2, winner of PHC"
 * console.log(pkg.programs)    // ["argon2"]
 * console.log(pkg.versions[0]) // "20190702.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/P-H-C/phc-winner-argon2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const argon2Package = {
  /**
   * The display name of this package.
   */
  name: 'argon2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/P-H-C/phc-winner-argon2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The password hash Argon2, winner of PHC' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/P-H-C/phc-winner-argon2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install argon2' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'argon2',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20190702.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) argon2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install argon2' as const,
}

export type Argon2Package = typeof argon2Package
