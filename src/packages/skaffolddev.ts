/**
 * **skaffold** - Easy and Repeatable Kubernetes Development
 *
 * @domain `skaffold.dev`
 * @programs `skaffold`
 * @version `2.16.1` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install skaffold`
 * @aliases `skaffold`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.skaffold
 * // Or access via domain
 * const samePkg = pantry.skaffolddev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "skaffold.dev"
 * console.log(pkg.description) // "Easy and Repeatable Kubernetes Development"
 * console.log(pkg.programs)    // ["skaffold"]
 * console.log(pkg.versions[0]) // "2.16.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/skaffold-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const skaffoldPackage = {
  /**
   * The display name of this package.
   */
  name: 'skaffold.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'skaffold.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Easy and Repeatable Kubernetes Development' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/skaffold.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install skaffold' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'skaffold',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.16.1',
    '2.16.0',
    '2.15.0',
    '2.14.2',
    '2.14.1',
    '2.14.0',
    '2.13.2',
    '2.13.0',
    '2.12.0',
    '2.11.1',
    '2.11.0',
    '2.10.1',
    '2.10.0',
    '2.9.0',
    '2.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'skaffold',
  ] as const,
}

export type SkaffoldPackage = typeof skaffoldPackage
