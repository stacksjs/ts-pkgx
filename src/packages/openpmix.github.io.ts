/**
 * **openpmix.github.io** - Process Management Interface for HPC environments
 *
 * @domain `openpmix.github.io`
 * @programs `palloc`, `pattrs`, `pctrl`, `pevent`, `plookup`, ... (+4 more)
 * @version `6.0.0` (9 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/openpmix-github-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +openpmix.github.io -- $SHELL -i`
 * @dependencies `open-mpi.org/hwloc^2.10`, `libevent.org^2.1`, `zlib.net^1.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openpmixgithubio
 * console.log(pkg.name)        // "openpmix.github.io"
 * console.log(pkg.description) // "Process Management Interface for HPC environments"
 * console.log(pkg.programs)    // ["palloc", "pattrs", ...]
 * console.log(pkg.versions[0]) // "6.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openpmix-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openpmixgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'openpmix.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openpmix.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Process Management Interface for HPC environments' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openpmix.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +openpmix.github.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'palloc',
    'pattrs',
    'pctrl',
    'pevent',
    'plookup',
    'pmix_info',
    'pmixcc',
    'pps',
    'pquery',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'open-mpi.org/hwloc^2.10',
    'libevent.org^2.1',
    'zlib.net^1.3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.0.0',
    '5.0.8',
    '5.0.7',
    '5.0.6',
    '5.0.5',
    '5.0.4',
    '5.0.3',
    '5.0.2',
    '5.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'openpmix.github.io' as const,
}

export type OpenpmixgithubioPackage = typeof openpmixgithubioPackage
