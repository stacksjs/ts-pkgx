/**
 * **jsonlint** - A JSON parser and validator with a CLI.
 *
 * @domain `github.com/zaach/jsonlint`
 * @programs `jsonlint`
 * @version `1.6.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jsonlint`
 * @name `jsonlint`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jsonlint
 * // Or access via domain
 * const samePkg = pantry.githubcomzaachjsonlint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jsonlint"
 * console.log(pkg.description) // "A JSON parser and validator with a CLI."
 * console.log(pkg.programs)    // ["jsonlint"]
 * console.log(pkg.versions[0]) // "1.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zaach/jsonlint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jsonlintPackage = {
  /**
   * The display name of this package.
   */
  name: 'jsonlint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zaach/jsonlint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A JSON parser and validator with a CLI.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zaach/jsonlint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jsonlint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jsonlint',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) jsonlint -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jsonlint' as const,
}

export type JsonlintPackage = typeof jsonlintPackage
