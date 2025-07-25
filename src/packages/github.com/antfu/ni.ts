/**
 * **github.com/antfu/ni** - 💡 Use the right package manager
 *
 * @domain `github.com/antfu/ni`
 * @programs `na`, `nci`, `ni`, `nlx`, `nr`, ... (+2 more)
 * @version `25.0.0` (24 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/antfu/ni`
 * @dependencies `nodejs.org>=14`, `npmjs.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomantfuni
 * console.log(pkg.name)        // "github.com/antfu/ni"
 * console.log(pkg.description) // "💡 Use the right package manager"
 * console.log(pkg.programs)    // ["na", "nci", ...]
 * console.log(pkg.versions[0]) // "25.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/antfu/ni.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomantfuniPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/antfu/ni' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/antfu/ni' as const,
  /**
   * Brief description of what this package does.
   */
  description: '💡 Use the right package manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/antfu/ni/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/antfu/ni' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'na',
    'nci',
    'ni',
    'nlx',
    'nr',
    'nu',
    'nun',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org>=14',
    'npmjs.com',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.0.0',
    '24.4.0',
    '24.3.0',
    '24.2.0',
    '24.1.0',
    '23.3.1',
    '23.3.0',
    '23.2.0',
    '0.23.2',
    '0.23.1',
    '0.23.0',
    '0.22.4',
    '0.22.3',
    '0.22.1',
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
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/antfu/ni -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/antfu/ni' as const,
}

export type GithubcomantfuniPackage = typeof githubcomantfuniPackage
