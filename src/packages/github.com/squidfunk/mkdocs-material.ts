/**
 * **mkdocs** - Documentation that simply works
 *
 * @domain `github.com/squidfunk/mkdocs-material`
 * @programs `mkdocs`
 * @version `9.6.18` (66 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mkdocs`
 * @name `squidfunk/mkdocs-material`
 * @aliases `mkdocs`
 * @dependencies `pkgx.sh^1`, `sass-lang.com/libsass^3.6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mkdocs
 * // Or access via domain
 * const samePkg = pantry.githubcomsquidfunkmkdocsmaterial
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "squidfunk/mkdocs-material"
 * console.log(pkg.description) // "Documentation that simply works"
 * console.log(pkg.programs)    // ["mkdocs"]
 * console.log(pkg.versions[0]) // "9.6.18" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/squidfunk/mkdocs-material.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mkdocsPackage = {
  /**
   * The display name of this package.
   */
  name: 'squidfunk/mkdocs-material' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/squidfunk/mkdocs-material' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Documentation that simply works' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/squidfunk/mkdocs-material/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mkdocs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mkdocs',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'sass-lang.com/libsass^3.6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.6.18',
    '9.6.17',
    '9.6.16',
    '9.6.15',
    '9.6.14',
    '9.6.13',
    '9.6.12',
    '9.6.11',
    '9.6.10',
    '9.6.9',
    '9.6.8',
    '9.6.7',
    '9.6.6',
    '9.6.5',
    '9.6.4',
    '9.6.3',
    '9.6.2',
    '9.6.1',
    '9.6.0',
    '9.5.50',
    '9.5.49',
    '9.5.48',
    '9.5.47',
    '9.5.46',
    '9.5.45',
    '9.5.44',
    '9.5.43',
    '9.5.42',
    '9.5.41',
    '9.5.40',
    '9.5.39',
    '9.5.38',
    '9.5.37',
    '9.5.36',
    '9.5.35',
    '9.5.34',
    '9.5.33',
    '9.5.32',
    '9.5.31',
    '9.5.30',
    '9.5.29',
    '9.5.28',
    '9.5.27',
    '9.5.26',
    '9.5.25',
    '9.5.24',
    '9.5.23',
    '9.5.22',
    '9.5.21',
    '9.5.20',
    '9.5.19',
    '9.5.18',
    '9.5.17',
    '9.5.16',
    '9.5.15',
    '9.5.14',
    '9.5.13',
    '9.5.12',
    '9.5.11',
    '9.5.10',
    '9.5.9',
    '9.5.8',
    '9.5.7',
    '9.5.6',
    '9.5.5',
    '9.5.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mkdocs',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mkdocs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mkdocs' as const,
}

export type MkdocsPackage = typeof mkdocsPackage
