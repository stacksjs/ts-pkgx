/**
 * **daemontools** - Collection of tools for managing UNIX services
 *
 * @domain `cr.yp.to/daemontools`
 * @programs `envdir`, `envuidgid`, `fghack`, `multilog`, `pgrphack`, ... (+12 more)
 * @version `0.76.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/cr-yp-to/daemontools.md
 *
 * @install `sh <(curl https://pkgx.sh) +cr.yp.to/daemontools -- $SHELL -i`
 * @aliases `daemontools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.daemontools
 * // Or access via domain
 * const samePkg = pantry.cryptodaemontools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cr.yp.to/daemontools"
 * console.log(pkg.description) // "Collection of tools for managing UNIX services"
 * console.log(pkg.programs)    // ["envdir", "envuidgid", ...]
 * console.log(pkg.versions[0]) // "0.76.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cr-yp-to/daemontools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const daemontoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'cr.yp.to/daemontools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cr.yp.to/daemontools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Collection of tools for managing UNIX services' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cr.yp.to/daemontools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +cr.yp.to/daemontools -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'envdir',
    'envuidgid',
    'fghack',
    'multilog',
    'pgrphack',
    'readproctitle',
    'setlock',
    'setuidgid',
    'softlimit',
    'supervise',
    'svc',
    'svok',
    'svscan',
    'svscanboot',
    'svstat',
    'tai64n',
    'tai64nlocal',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.76.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'daemontools',
  ] as const,
  fullPath: 'cr.yp.to/daemontools' as const,
}

export type DaemontoolsPackage = typeof daemontoolsPackage
