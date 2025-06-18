/**
 * **render** - Command-line interface for Render
 *
 * @domain `render.com`
 * @programs `render`
 * @version `0.1.11` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install render`
 * @aliases `render`
 * @dependencies `deno.land^1.30`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.render
 * // Or access via domain
 * const samePkg = pantry.rendercom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "render.com"
 * console.log(pkg.description) // "Command-line interface for Render"
 * console.log(pkg.programs)    // ["render"]
 * console.log(pkg.versions[0]) // "0.1.11" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/render-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const renderPackage = {
  /**
   * The display name of this package.
   */
  name: 'render.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'render.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line interface for Render' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/render.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install render' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'render',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'deno.land^1.30',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.11',
    '0.1.10',
    '0.1.9',
    '0.1.8',
    '0.1.7',
    '0.1.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'render',
  ] as const,
}

export type RenderPackage = typeof renderPackage
