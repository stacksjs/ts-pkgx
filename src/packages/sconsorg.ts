/**
 * **scons** - pkgx package
 *
 * @domain `scons.org`
 * @version `4.10.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install scons.org`
 * @dependencies `python.org~3.11`, `linux:gnu.org/gcc>=10` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sconsorg
 * console.log(pkg.name)        // "scons"
 * console.log(pkg.versions[0]) // "4.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scons-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sconsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'scons' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scons.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scons.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install scons.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +scons.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install scons.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Runtime dependencies for this package.
   * These are required when running the package.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'python.org~3.11',
    'linux:gnu.org/gcc>=10',
  ] as const,
  buildDependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.10.0',
    '4.9.1',
    '4.9.0',
    '4.8.1',
    '4.8.0',
    '4.7.0',
    '4.6.0',
    '4.5.2',
  ] as const,
  aliases: [] as const,
}

export type SconsorgPackage = typeof sconsorgPackage
