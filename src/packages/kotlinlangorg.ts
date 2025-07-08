/**
 * **kotlinlang.org** - Statically typed programming language for the JVM
 *
 * @domain `kotlinlang.org`
 * @programs `kapt`, `kotlin`, `kotlinc`, `kotlinc-js`, `kotlinc-jvm`
 * @version `2.2.0` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kotlinlang.org`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kotlinlangorg
 * console.log(pkg.name)        // "kotlinlang.org"
 * console.log(pkg.description) // "Statically typed programming language for the JVM"
 * console.log(pkg.programs)    // ["kapt", "kotlin", ...]
 * console.log(pkg.versions[0]) // "2.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kotlinlang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kotlinlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'kotlinlang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kotlinlang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Statically typed programming language for the JVM' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kotlinlang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kotlinlang.org' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kapt',
    'kotlin',
    'kotlinc',
    'kotlinc-js',
    'kotlinc-jvm',
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
    '2.2.0',
    '2.1.21',
    '2.1.20',
    '2.1.10',
    '2.1.0',
    '2.0.21',
    '2.0.20',
    '2.0.10',
    '2.0.0',
    '1.9.25',
    '1.9.24',
    '1.9.23',
    '1.9.22',
    '1.9.21',
    '1.9.20',
    '1.9.10',
    '1.9.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kotlinlang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kotlinlang.org' as const,
}

export type KotlinlangorgPackage = typeof kotlinlangorgPackage
