/**
 * **pyproject-build** - A simple, correct Python build frontend
 *
 * @domain `github.com/pypa/build`
 * @programs `pyproject-build`
 * @version `1.3.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pyproject-build`
 * @name `pyproject-build`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pyprojectbuild
 * // Or access via domain
 * const samePkg = pantry.githubcompypabuild
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pyproject-build"
 * console.log(pkg.description) // "A simple, correct Python build frontend"
 * console.log(pkg.programs)    // ["pyproject-build"]
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/pypa/build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pyprojectbuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'pyproject-build' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/pypa/build' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A simple, correct Python build frontend' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pypa/build/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pyproject-build' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pyproject-build',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.1',
    '1.1.0',
    '1.0.3',
    '1.0.1',
    '1.0.0',
    '0.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pyproject-build -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pyproject-build' as const,
}

export type PyprojectbuildPackage = typeof pyprojectbuildPackage
