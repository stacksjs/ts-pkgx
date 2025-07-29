/**
 * **micromamba** - The Fast Cross-Platform Package Manager
 *
 * @domain `github.com/mamba-org/micro`
 * @programs `micromamba`
 * @version `2.3.1` (26 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install micromamba`
 * @name `micromamba`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.micromamba
 * // Or access via domain
 * const samePkg = pantry.githubcommambaorgmicro
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "micromamba"
 * console.log(pkg.description) // "The Fast Cross-Platform Package Manager"
 * console.log(pkg.programs)    // ["micromamba"]
 * console.log(pkg.versions[0]) // "2.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mamba-org/micro.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const micromambaPackage = {
  /**
   * The display name of this package.
   */
  name: 'micromamba' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mamba-org/micro' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Fast Cross-Platform Package Manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mamba-org/micro/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install micromamba' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'micromamba',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.1',
    '2.3.0',
    '2.2.0',
    '2.1.1',
    '2.1.0',
    '2.0.8',
    '2.0.7',
    '2.0.6',
    '2.0.5',
    '2.0.4',
    '2.0.3',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.5.12',
    '1.5.11',
    '1.5.10',
    '1.5.9',
    '1.5.8',
    '1.5.7',
    '1.5.6',
    '1.5.5',
    '1.5.3',
    '1.5.1',
    '1.5.0',
    '1.4.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) micromamba -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install micromamba' as const,
}

export type MicromambaPackage = typeof micromambaPackage
