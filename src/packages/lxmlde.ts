/**
 * **lxml.de** - The lxml XML toolkit for Python
 *
 * @domain `lxml.de`
 * @version `5.4.0` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lxml.de`
 * @dependencies `python.org^3.10`, `gnome.org/libxml2~2.12`, `gnome.org/libxslt^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lxmlde
 * console.log(pkg.name)        // "lxml.de"
 * console.log(pkg.description) // "The lxml XML toolkit for Python"
 * console.log(pkg.versions[0]) // "5.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lxml-de.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lxmldePackage = {
  /**
   * The display name of this package.
   */
  name: 'lxml.de' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lxml.de' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The lxml XML toolkit for Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lxml.de/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lxml.de' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org^3.10',
    'gnome.org/libxml2~2.12',
    'gnome.org/libxslt^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.4.0',
    '5.3.2',
    '5.3.1',
    '5.3.0',
    '5.2.2',
    '5.2.1',
    '5.2.0',
    '5.1.1',
    '5.1.0',
    '5.0.2',
    '5.0.1',
    '5.0.0',
    '4.9.4',
    '4.9.3',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lxml.de -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lxml.de' as const,
}

export type LxmldePackage = typeof lxmldePackage
