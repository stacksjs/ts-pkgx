/**
 * **gox** - A dead simple, no frills Go cross compile tool
 *
 * @domain `github.com/mitchellh/gox`
 * @programs `gox`
 * @version `1.0.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gox`
 * @name `gox`
 * @dependencies `go.dev`, `gnu.org/wget`, `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gox
 * // Or access via domain
 * const samePkg = pantry.githubcommitchellhgox
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gox"
 * console.log(pkg.description) // "A dead simple, no frills Go cross compile tool"
 * console.log(pkg.programs)    // ["gox"]
 * console.log(pkg.versions[0]) // "1.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mitchellh/gox.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const goxPackage = {
  /**
   * The display name of this package.
   */
  name: 'gox' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mitchellh/gox' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A dead simple, no frills Go cross compile tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mitchellh/gox/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gox' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gox',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
    'gnu.org/wget',
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GoxPackage = typeof goxPackage
