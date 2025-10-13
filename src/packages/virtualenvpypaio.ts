/**
 * **virtualenv** - Tool for creating isolated virtual python environments
 *
 * @domain `virtualenv.pypa.io`
 * @programs `virtualenv`
 * @version `20.35.3` (48 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install virtualenv`
 * @name `virtualenv`
 * @dependencies `pkgx.sh^1`, `libexpat.github.io^2`, `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.virtualenv
 * // Or access via domain
 * const samePkg = pantry.virtualenvpypaio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "virtualenv"
 * console.log(pkg.description) // "Tool for creating isolated virtual python envir..."
 * console.log(pkg.programs)    // ["virtualenv"]
 * console.log(pkg.versions[0]) // "20.35.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/virtualenv-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const virtualenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'virtualenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'virtualenv.pypa.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool for creating isolated virtual python environments' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/virtualenv.pypa.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install virtualenv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'virtualenv',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'libexpat.github.io^2',
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20.35.3',
    '20.35.2',
    '20.35.1',
    '20.35.0',
    '20.34.0',
    '20.33.1',
    '20.33.0',
    '20.32.0',
    '20.31.2',
    '20.31.1',
    '20.31.0',
    '20.30.0',
    '20.29.3',
    '20.29.2',
    '20.29.1',
    '20.29.0',
    '20.28.1',
    '20.28.0',
    '20.27.2',
    '20.27.1',
    '20.27.0',
    '20.26.6',
    '20.26.5',
    '20.26.4',
    '20.26.3',
    '20.26.2',
    '20.26.1',
    '20.26.0',
    '20.25.3',
    '20.25.2',
    '20.25.1',
    '20.25.0',
    '20.24.7',
    '20.24.6',
    '20.24.5',
    '20.24.4',
    '20.24.3',
    '20.24.2',
    '20.24.1',
    '20.24.0',
    '20.23.1',
    '20.23.0',
    '20.22.0',
    '20.21.1',
    '20.21.0',
    '20.20.0',
    '20.19.0',
    '20.18.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) virtualenv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install virtualenv' as const,
}

export type VirtualenvPackage = typeof virtualenvPackage
