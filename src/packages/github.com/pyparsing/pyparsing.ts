/**
 * **pyparsing/pyparsing** - Python library for creating PEG parsers
 *
 * @domain `github.com/pyparsing/pyparsing`
 * @version `3.2.3` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/pyparsing/pyparsing -- $SHELL -i`
 * @aliases `pyparsing/pyparsing`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pyparsingpyparsing
 * // Or access via domain
 * const samePkg = pantry.githubcompyparsingpyparsing
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/pyparsing/pyparsing"
 * console.log(pkg.description) // "Python library for creating PEG parsers"
 * console.log(pkg.versions[0]) // "3.2.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/pyparsing/pyparsing.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pyparsingpyparsingPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/pyparsing/pyparsing' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/pyparsing/pyparsing' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python library for creating PEG parsers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pyparsing/pyparsing/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/pyparsing/pyparsing -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.2.3',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '3.1.4',
    '3.1.3',
    '3.1.2',
    '3.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pyparsing/pyparsing',
  ] as const,
  fullPath: 'github.com/pyparsing/pyparsing' as const,
}

export type PyparsingpyparsingPackage = typeof pyparsingpyparsingPackage
