/**
 * **csvdiff** - A fast diff tool for comparing csv files
 *
 * @domain `github.com/aswinkarthik/csvdiff`
 * @programs `csvdiff`
 * @version `1.4.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install csvdiff`
 * @name `csvdiff`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.csvdiff
 * // Or access via domain
 * const samePkg = pantry.githubcomaswinkarthikcsvdiff
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "csvdiff"
 * console.log(pkg.description) // "A fast diff tool for comparing csv files"
 * console.log(pkg.programs)    // ["csvdiff"]
 * console.log(pkg.versions[0]) // "1.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aswinkarthik/csvdiff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const csvdiffPackage = {
  /**
   * The display name of this package.
   */
  name: 'csvdiff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aswinkarthik/csvdiff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast diff tool for comparing csv files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/aswinkarthik/csvdiff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install csvdiff' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'csvdiff',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) csvdiff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install csvdiff' as const,
}

export type CsvdiffPackage = typeof csvdiffPackage
