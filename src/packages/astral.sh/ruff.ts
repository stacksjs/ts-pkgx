/**
 * **ruff** - An extremely fast Python linter and code formatter, written in Rust.
 *
 * @domain `astral.sh/ruff`
 * @programs `ruff`
 * @version `0.12.1` (87 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ruff`
 * @name `ruff`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ruff
 * // Or access via domain
 * const samePkg = pantry.astralshruff
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ruff"
 * console.log(pkg.description) // "An extremely fast Python linter and code format..."
 * console.log(pkg.programs)    // ["ruff"]
 * console.log(pkg.versions[0]) // "0.12.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/astral-sh/ruff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ruffPackage = {
  /**
   * The display name of this package.
   */
  name: 'ruff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'astral.sh/ruff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An extremely fast Python linter and code formatter, written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/astral.sh/ruff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ruff' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ruff',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.12.1',
    '0.12.0',
    '0.11.13',
    '0.11.12',
    '0.11.11',
    '0.11.10',
    '0.11.9',
    '0.11.8',
    '0.11.7',
    '0.11.6',
    '0.11.5',
    '0.11.4',
    '0.11.3',
    '0.11.2',
    '0.11.1',
    '0.11.0',
    '0.10.0',
    '0.9.10',
    '0.9.9',
    '0.9.8',
    '0.9.7',
    '0.9.6',
    '0.9.5',
    '0.9.4',
    '0.9.3',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.6',
    '0.8.5',
    '0.8.4',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.4',
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.9',
    '0.6.8',
    '0.6.7',
    '0.6.6',
    '0.6.5',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.7',
    '0.5.6',
    '0.5.5',
    '0.5.4',
    '0.5.3',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.10',
    '0.4.9',
    '0.4.8',
    '0.4.7',
    '0.4.6',
    '0.4.5',
    '0.4.4',
    '0.4.3',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.7',
    '0.3.6',
    '0.3.5',
    '0.3.4',
    '0.3.3',
    '0.3.2',
    '0.3.1',
    '0.3.0',
    '0.2.2',
    '0.2.1',
    '0.2.0',
    '0.1.15',
    '0.1.14',
    '0.1.13',
    '0.1.12',
    '0.1.11',
    '0.1.10',
    '0.1.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ruff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ruff' as const,
}

export type RuffPackage = typeof ruffPackage
