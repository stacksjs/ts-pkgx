/**
 * **complexity** - A command line tool to identify complex code
 *
 * @domain `github.com/thoughtbot/complexity`
 * @programs `complexity`
 * @version `0.4.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install complexity`
 * @name `complexity`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.complexity
 * // Or access via domain
 * const samePkg = pantry.githubcomthoughtbotcomplexity
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "complexity"
 * console.log(pkg.description) // "A command line tool to identify complex code"
 * console.log(pkg.programs)    // ["complexity"]
 * console.log(pkg.versions[0]) // "0.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thoughtbot/complexity.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const complexityPackage = {
  /**
   * The display name of this package.
   */
  name: 'complexity' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thoughtbot/complexity' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A command line tool to identify complex code' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thoughtbot/complexity/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install complexity' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'complexity',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type ComplexityPackage = typeof complexityPackage
