/**
 * **wimlib** - pkgx package
 *
 * @domain `wimlib.net`
 * @version `1.14.4` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install wimlib.net`
 * @dependencies `openssl.org^3.1.0`, `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wimlibnet
 * console.log(pkg.name)        // "wimlib"
 * console.log(pkg.versions[0]) // "1.14.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wimlib-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wimlibnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'wimlib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wimlib.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wimlib.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wimlib.net' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +wimlib.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install wimlib.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Runtime dependencies for this package.
   * These are required when running the package.
   */
  dependencies: [
    'openssl.org^3.1.0',
    'gnome.org/libxml2',
  ] as const,
  buildDependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.14.4',
    '1.14.3',
    '1.14.1',
  ] as const,
  aliases: [] as const,
}

export type WimlibnetPackage = typeof wimlibnetPackage
