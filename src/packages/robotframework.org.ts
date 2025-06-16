/**
 * **robot** - Generic automation framework for acceptance testing and RPA
 *
 * @domain `robotframework.org`
 * @programs `robot`
 * @version `7.3.1` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/robotframework-org.md
 *
 * @install `sh <(curl https://pkgx.sh) robot`
 * @name `robot`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.robot
 * // Or access via domain
 * const samePkg = pantry.robotframeworkorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "robot"
 * console.log(pkg.description) // "Generic automation framework for acceptance tes..."
 * console.log(pkg.programs)    // ["robot"]
 * console.log(pkg.versions[0]) // "7.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/robotframework-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const robotPackage = {
  /**
   * The display name of this package.
   */
  name: 'robot' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'robotframework.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generic automation framework for acceptance testing and RPA' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/robotframework.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) robot' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'robot',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.3.1',
    '7.3.0',
    '7.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'robotframework.org' as const,
}

export type RobotPackage = typeof robotPackage
