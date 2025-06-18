/**
 * **scons.org** - Package from pantry: scons.org
 *
 * @domain `scons.org`
 *
 * @install `launchpad install scons.org`
 * @dependencies `python.org~3.11`, `gnu.org/gcc>=10`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sconsorg
 * console.log(pkg.name)        // "scons.org"
 * console.log(pkg.description) // "Package from pantry: scons.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scons-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sconsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'scons.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scons.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: scons.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install scons.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'gnu.org/gcc>=10',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scons.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SconsorgPackage = typeof sconsorgPackage
