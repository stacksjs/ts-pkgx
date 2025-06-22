/**
 * **pipx** - Execute binaries from Python packages in isolated environments
 *
 * @domain `pypa.github.io/pipx`
 * @programs `pipx`
 * @version `1.7.1` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pipx`
 * @name `pipx`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pipx
 * // Or access via domain
 * const samePkg = pantry.pypagithubiopipx
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pipx"
 * console.log(pkg.description) // "Execute binaries from Python packages in isolat..."
 * console.log(pkg.programs)    // ["pipx"]
 * console.log(pkg.versions[0]) // "1.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-github-io/pipx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pipxPackage = {
  /**
   * The display name of this package.
   */
  name: 'pipx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.github.io/pipx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Execute binaries from Python packages in isolated environments' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pypa.github.io/pipx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pipx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pipx',
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
    '1.7.1',
    '1.7.0',
    '1.6.0',
    '1.5.0',
    '1.4.3',
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.3',
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.1',
    '1.2.0',
    '1.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pipx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pipx' as const,
}

export type PipxPackage = typeof pipxPackage
