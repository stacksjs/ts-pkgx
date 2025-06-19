/**
 * **process-compose** - Process Compose is a simple and flexible scheduler and orchestrator to manage non-containerized applications.
 *
 * @domain `f1bonacc1.github.io/process-compose`
 * @programs `process-compose`
 * @version `1.64.1` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install process-compose`
 * @name `process-compose`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.processcompose
 * // Or access via domain
 * const samePkg = pantry.f1bonacc1githubioprocesscompose
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "process-compose"
 * console.log(pkg.description) // "Process Compose is a simple and flexible schedu..."
 * console.log(pkg.programs)    // ["process-compose"]
 * console.log(pkg.versions[0]) // "1.64.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/f1bonacc1-github-io/process-compose.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const processcomposePackage = {
  /**
   * The display name of this package.
   */
  name: 'process-compose' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'f1bonacc1.github.io/process-compose' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Process Compose is a simple and flexible scheduler and orchestrator to manage non-containerized applications.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/f1bonacc1.github.io/process-compose/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install process-compose' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'process-compose',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.64.1',
    '1.63.0',
    '1.46.0',
    '1.40.1',
    '1.40.0',
    '1.34.0',
    '1.27.0',
    '1.24.2',
    '1.24.0',
    '1.18.0',
    '1.9.0',
    '1.6.1',
    '1.5.0',
    '1.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type ProcesscomposePackage = typeof processcomposePackage
