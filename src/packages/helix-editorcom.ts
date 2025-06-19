/**
 * **hx** - A post-modern modal text editor.
 *
 * @domain `helix-editor.com`
 * @programs `hx`
 * @version `25.1.1` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install hx`
 * @aliases `hx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.hx
 * // Or access via domain
 * const samePkg = pantry.helixeditorcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "helix-editor.com"
 * console.log(pkg.description) // "A post-modern modal text editor."
 * console.log(pkg.programs)    // ["hx"]
 * console.log(pkg.versions[0]) // "25.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/helix-editor-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hxPackage = {
  /**
   * The display name of this package.
   */
  name: 'helix-editor.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'helix-editor.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A post-modern modal text editor.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/helix-editor.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install hx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hx',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.1.1',
    '25.1.0',
    '24.7.0',
    '24.3.0',
    '23.10.0',
    '23.5.0',
    '23.3.0',
    '22.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'hx',
  ] as const,
}

export type HxPackage = typeof hxPackage
