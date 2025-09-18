/**
 * **gradle** - Open-source build automation tool based on the Groovy and Kotlin DSL
 *
 * @domain `gradle.org`
 * @programs `gradle`
 * @version `9.1.0` (22 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gradle`
 * @name `gradle`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gradle
 * // Or access via domain
 * const samePkg = pantry.gradleorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gradle"
 * console.log(pkg.description) // "Open-source build automation tool based on the ..."
 * console.log(pkg.programs)    // ["gradle"]
 * console.log(pkg.versions[0]) // "9.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gradle-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gradlePackage = {
  /**
   * The display name of this package.
   */
  name: 'gradle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gradle.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Open-source build automation tool based on the Groovy and Kotlin DSL' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gradle.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gradle' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gradle',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.1.0',
    '9.0.0',
    '8.14.3',
    '8.14.2',
    '8.14.1',
    '8.14.0',
    '8.13.0',
    '8.12.1',
    '8.12.0',
    '8.11.1',
    '8.11.0',
    '8.10.2',
    '8.10.1',
    '8.10.0',
    '8.9.0',
    '8.8.0',
    '8.7.0',
    '8.6.0',
    '8.5.0',
    '8.2.1',
    '7.6.6',
    '7.6.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) gradle -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gradle' as const,
}

export type GradlePackage = typeof gradlePackage
