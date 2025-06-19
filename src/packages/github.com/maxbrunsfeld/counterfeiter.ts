/**
 * **counterfeiter** - A tool for generating self-contained, type-safe test doubles in go
 *
 * @domain `github.com/maxbrunsfeld/counterfeiter`
 * @programs `counterfeiter`
 * @version `6.11.2` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install counterfeiter`
 * @name `counterfeiter`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.counterfeiter
 * // Or access via domain
 * const samePkg = pantry.githubcommaxbrunsfeldcounterfeiter
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "counterfeiter"
 * console.log(pkg.description) // "A tool for generating self-contained, type-safe..."
 * console.log(pkg.programs)    // ["counterfeiter"]
 * console.log(pkg.versions[0]) // "6.11.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/maxbrunsfeld/counterfeiter.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const counterfeiterPackage = {
  /**
   * The display name of this package.
   */
  name: 'counterfeiter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/maxbrunsfeld/counterfeiter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A tool for generating self-contained, type-safe test doubles in go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/maxbrunsfeld/counterfeiter/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install counterfeiter' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'counterfeiter',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.11.2',
    '6.11.1',
    '6.11.0',
    '6.10.0',
    '6.9.0',
    '6.8.1',
    '6.8.0',
    '6.7.0',
    '6.6.2',
    '6.6.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CounterfeiterPackage = typeof counterfeiterPackage
