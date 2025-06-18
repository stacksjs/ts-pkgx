/**
 * **augeas.net** - A configuration editing tool and API
 *
 * @domain `augeas.net`
 * @programs `augmatch`, `augparse`, `augprint`, `augtool`, `fadot`
 * @version `1.14.1` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +augeas.net -- $SHELL -i`
 * @dependencies `gnu.org/readline`, `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.augeasnet
 * console.log(pkg.name)        // "augeas.net"
 * console.log(pkg.description) // "A configuration editing tool and API"
 * console.log(pkg.programs)    // ["augmatch", "augparse", ...]
 * console.log(pkg.versions[0]) // "1.14.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/augeas-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const augeasnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'augeas.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'augeas.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A configuration editing tool and API' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/augeas.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +augeas.net -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'augmatch',
    'augparse',
    'augprint',
    'augtool',
    'fadot',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/readline',
    'gnome.org/libxml2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.14.1',
    '1.14.0',
  ] as const,
  aliases: [] as const,
}

export type AugeasnetPackage = typeof augeasnetPackage
