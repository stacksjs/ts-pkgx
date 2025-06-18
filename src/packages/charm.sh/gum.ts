/**
 * **gum** - A tool for glamorous shell scripts 🎀
 *
 * @domain `charm.sh/gum`
 * @programs `gum`
 * @version `0.16.1` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gum`
 * @name `gum`
 * @dependencies `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gum
 * // Or access via domain
 * const samePkg = pantry.charmshgum
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gum"
 * console.log(pkg.description) // "A tool for glamorous shell scripts 🎀"
 * console.log(pkg.programs)    // ["gum"]
 * console.log(pkg.versions[0]) // "0.16.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/gum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gumPackage = {
  /**
   * The display name of this package.
   */
  name: 'gum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/gum' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A tool for glamorous shell scripts 🎀' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/gum/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gum' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gum',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.16.1',
    '0.16.0',
    '0.15.2',
    '0.15.1',
    '0.15.0',
    '0.14.5',
    '0.14.4',
    '0.14.3',
    '0.14.2',
    '0.14.1',
    '0.14.0',
    '0.13.0',
    '0.12.0',
    '0.11.0',
    '0.10.0',
    '0.9.0',
    '0.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GumPackage = typeof gumPackage
