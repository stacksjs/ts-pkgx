/**
 * **psutils** - Utilities for manipulating PostScript documents
 *
 * @domain `github.com/rrthomas/psutils`
 * @programs `psbook`, `psjoin`, `psnup`, `psresize`, `psselect`, ... (+1 more)
 * @version `3.3.10` (16 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/rrthomas/psutils -- $SHELL -i`
 * @dependencies `pkgx.sh^1`, `github.com/rrthomas/libpaper`, `python.org~3.11`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomrrthomaspsutils
 * console.log(pkg.name)        // "psutils"
 * console.log(pkg.description) // "Utilities for manipulating PostScript documents"
 * console.log(pkg.programs)    // ["psbook", "psjoin", ...]
 * console.log(pkg.versions[0]) // "3.3.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/rrthomas/psutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomrrthomaspsutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'psutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/rrthomas/psutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Utilities for manipulating PostScript documents' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/rrthomas/psutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/rrthomas/psutils -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'psbook',
    'psjoin',
    'psnup',
    'psresize',
    'psselect',
    'pstops',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'github.com/rrthomas/libpaper',
    'python.org~3.11',
    'gnu.org/wget',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.10',
    '3.3.9',
    '3.3.8',
    '3.3.7',
    '3.3.6',
    '3.3.5',
    '3.3.4',
    '3.3.3',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.0',
    '3.1.2',
    '3.1.1',
    '3.1.0',
    '3.0.9',
  ] as const,
  aliases: [] as const,
}

export type GithubcomrrthomaspsutilsPackage = typeof githubcomrrthomaspsutilsPackage
