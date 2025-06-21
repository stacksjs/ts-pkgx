/**
 * **copa** - Tool to directly patch container images given the vulnerability scanning results
 *
 * @domain `project-copacetic.github.io`
 * @programs `copa`
 * @version `0.10.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install copa`
 * @aliases `copa`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.copa
 * // Or access via domain
 * const samePkg = pantry.projectcopaceticgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "project-copacetic.github.io"
 * console.log(pkg.description) // "Tool to directly patch container images given t..."
 * console.log(pkg.programs)    // ["copa"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/project-copacetic-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const copaPackage = {
  /**
   * The display name of this package.
   */
  name: 'project-copacetic.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'project-copacetic.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool to directly patch container images given the vulnerability scanning results' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/project-copacetic.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/project-copacetic/copacetic' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install copa' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'copa',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.0',
    '0.6.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'copa',
  ] as const,
}

export type CopaPackage = typeof copaPackage
