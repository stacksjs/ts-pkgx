/**
 * **jless** - jless is a command-line JSON viewer designed for reading, exploring, and searching through JSON data.
 *
 * @domain `jless.io`
 * @programs `jless`
 * @version `0.9.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jless`
 * @aliases `jless`
 * @dependencies `linux:x.org/xcb@1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jless
 * // Or access via domain
 * const samePkg = pantry.jlessio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jless.io"
 * console.log(pkg.description) // "jless is a command-line JSON viewer designed fo..."
 * console.log(pkg.programs)    // ["jless"]
 * console.log(pkg.versions[0]) // "0.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jless-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jlessPackage = {
  /**
   * The display name of this package.
   */
  name: 'jless.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jless.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'jless is a command-line JSON viewer designed for reading, exploring, and searching through JSON data.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jless.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jless' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jless',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:x.org/xcb@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jless',
  ] as const,
}

export type JlessPackage = typeof jlessPackage
