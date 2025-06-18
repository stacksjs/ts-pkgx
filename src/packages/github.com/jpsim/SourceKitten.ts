/**
 * **sourcekitten** - An adorable little framework and command line tool for interacting with SourceKit.
 *
 * @domain `github.com/jpsim/SourceKitten`
 * @programs `sourcekitten`
 * @version `0.37.2` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sourcekitten`
 * @aliases `sourcekitten`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sourcekitten
 * // Or access via domain
 * const samePkg = pantry.githubcomjpsimsourcekitten
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "SourceKitten"
 * console.log(pkg.description) // "An adorable little framework and command line t..."
 * console.log(pkg.programs)    // ["sourcekitten"]
 * console.log(pkg.versions[0]) // "0.37.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jpsim/SourceKitten.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourcekittenPackage = {
  /**
   * The display name of this package.
   */
  name: 'SourceKitten' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jpsim/SourceKitten' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An adorable little framework and command line tool for interacting with SourceKit.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jpsim/SourceKitten/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/jpsim/SourceKitten' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install sourcekitten' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sourcekitten',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.37.2',
    '0.37.1',
    '0.37.0',
    '0.36.0',
    '0.35.0',
    '0.34.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sourcekitten',
  ] as const,
}

export type SourcekittenPackage = typeof sourcekittenPackage
