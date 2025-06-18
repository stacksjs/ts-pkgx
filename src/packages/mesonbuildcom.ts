/**
 * **mesonbuild.com** - Package from pantry: mesonbuild.com
 *
 * @domain `mesonbuild.com`
 *
 * @install `launchpad install mesonbuild.com`
 * @dependencies `pkgx.sh^1`, `python.org~3.11`, `ninja-build.org^1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mesonbuildcom
 * console.log(pkg.name)        // "mesonbuild.com"
 * console.log(pkg.description) // "Package from pantry: mesonbuild.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mesonbuild-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mesonbuildcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'mesonbuild.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mesonbuild.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mesonbuild.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mesonbuild.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org~3.11',
    'ninja-build.org^1',
    'llvm.org<17',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mesonbuild.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MesonbuildcomPackage = typeof mesonbuildcomPackage
