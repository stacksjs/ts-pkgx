/**
 * **pakku** - pakku is a declarative approach to your system package managers.
 *
 * @domain `github.com/mycreepy/pakku`
 * @programs `pakku`
 * @version `0.5.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pakku`
 * @name `pakku`
 * @dependencies `go.dev^1.23`, `goreleaser.com`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pakku
 * // Or access via domain
 * const samePkg = pantry.githubcommycreepypakku
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pakku"
 * console.log(pkg.description) // "pakku is a declarative approach to your system ..."
 * console.log(pkg.programs)    // ["pakku"]
 * console.log(pkg.versions[0]) // "0.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mycreepy/pakku.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pakkuPackage = {
  /**
   * The display name of this package.
   */
  name: 'pakku' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mycreepy/pakku' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'pakku is a declarative approach to your system package managers.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mycreepy/pakku/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/mycreepy/pakku' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pakku' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pakku',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.23',
    'goreleaser.com',
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.0',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.1',
    '0.3.0',
    '0.2.0',
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type PakkuPackage = typeof pakkuPackage
