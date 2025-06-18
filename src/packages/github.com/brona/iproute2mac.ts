/**
 * **brona/iproute2mac** - CLI wrapper for basic network utilites on Mac OS X inspired with iproute2 on Linux systems - ip command.
 *
 * @domain `github.com/brona/iproute2mac`
 * @programs `bridge`, `ip`, `iproute2mac.py`
 * @version `1.5.4` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/brona/iproute2mac -- $SHELL -i`
 * @aliases `brona/iproute2mac`
 * @dependencies `python.org~3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.bronaiproute2mac
 * // Or access via domain
 * const samePkg = pantry.githubcombronaiproute2mac
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/brona/iproute2mac"
 * console.log(pkg.description) // "CLI wrapper for basic network utilites on Mac O..."
 * console.log(pkg.programs)    // ["bridge", "ip", ...]
 * console.log(pkg.versions[0]) // "1.5.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/brona/iproute2mac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bronaiproute2macPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/brona/iproute2mac' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/brona/iproute2mac' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI wrapper for basic network utilites on Mac OS X inspired with iproute2 on Linux systems - ip command.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/brona/iproute2mac/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/brona/iproute2mac -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bridge',
    'ip',
    'iproute2mac.py',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.4',
    '1.5.3',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'brona/iproute2mac',
  ] as const,
  fullPath: 'github.com/brona/iproute2mac' as const,
}

export type Bronaiproute2macPackage = typeof bronaiproute2macPackage
