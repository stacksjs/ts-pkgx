/**
 * **quary.dev/sqruff** - Fast SQL formatter/linter
 *
 * @domain `quary.dev/sqruff`
 * @programs `bench`, `sqruff`
 * @version `0.29.3` (94 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install quary.dev/sqruff`
 * @dependencies `linux:jemalloc.net@5` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.quarydevsqruff
 * console.log(pkg.name)        // "quary.dev/sqruff"
 * console.log(pkg.description) // "Fast SQL formatter/linter"
 * console.log(pkg.programs)    // ["bench", "sqruff"]
 * console.log(pkg.versions[0]) // "0.29.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/quary-dev/sqruff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const quarydevsqruffPackage = {
  /**
   * The display name of this package.
   */
  name: 'quary.dev/sqruff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'quary.dev/sqruff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast SQL formatter/linter' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/quary.dev/sqruff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install quary.dev/sqruff' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bench',
    'sqruff',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:jemalloc.net@5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.29.3',
    '0.29.2',
    '0.29.1',
    '0.29.0',
    '0.28.2',
    '0.28.1',
    '0.28.0',
    '0.27.0',
    '0.26.8',
    '0.26.7',
    '0.26.6',
    '0.26.5',
    '0.26.3',
    '0.26.2',
    '0.26.0',
    '0.25.28',
    '0.25.27',
    '0.25.26',
    '0.25.25',
    '0.25.24',
    '0.25.23',
    '0.25.22',
    '0.25.21',
    '0.25.20',
    '0.25.19',
    '0.25.18',
    '0.25.17',
    '0.25.16',
    '0.25.15',
    '0.25.14',
    '0.25.13',
    '0.25.12',
    '0.25.11',
    '0.25.10',
    '0.25.9',
    '0.25.7',
    '0.25.6',
    '0.25.5',
    '0.25.4',
    '0.25.3',
    '0.25.2',
    '0.25.1',
    '0.24.3',
    '0.24.2',
    '0.24.1',
    '0.23.1',
    '0.23.0',
    '0.22.0',
    '0.21.12',
    '0.21.11',
    '0.21.10',
    '0.21.9',
    '0.21.8',
    '0.21.7',
    '0.21.6',
    '0.21.5',
    '0.21.4',
    '0.21.3',
    '0.21.2',
    '0.21.1',
    '0.21.0',
    '0.20.2',
    '0.20.1',
    '0.20.0',
    '0.19.1',
    '0.19.0',
    '0.18.8',
    '0.18.6',
    '0.18.5',
    '0.18.4',
    '0.18.3',
    '0.18.2',
    '0.18.1',
    '0.18.0',
    '0.17.0',
    '0.16.0',
    '0.15.8',
    '0.15.7',
    '0.15.4',
    '0.15.2',
    '0.15.0',
    '0.14.0',
    '0.13.1',
    '0.13.0',
    '0.12.0',
    '0.11.1',
    '0.11.0',
    '0.10.3',
    '0.10.2',
    '0.10.1',
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.6',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +quary.dev/sqruff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install quary.dev/sqruff' as const,
}

export type QuarydevsqruffPackage = typeof quarydevsqruffPackage
