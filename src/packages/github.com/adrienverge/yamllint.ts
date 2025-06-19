/**
 * **yamllint** - A linter for YAML files.
 *
 * @domain `github.com/adrienverge/yamllint`
 * @programs `yamllint`
 * @version `1.37.1` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install yamllint`
 * @name `yamllint`
 * @dependencies `python.org~3.11`, `pyyaml.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yamllint
 * // Or access via domain
 * const samePkg = pantry.githubcomadrienvergeyamllint
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yamllint"
 * console.log(pkg.description) // "A linter for YAML files."
 * console.log(pkg.programs)    // ["yamllint"]
 * console.log(pkg.versions[0]) // "1.37.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adrienverge/yamllint.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yamllintPackage = {
  /**
   * The display name of this package.
   */
  name: 'yamllint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adrienverge/yamllint' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A linter for YAML files.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adrienverge/yamllint/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install yamllint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yamllint',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'pyyaml.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.37.1',
    '1.37.0',
    '1.36.2',
    '1.36.1',
    '1.36.0',
    '1.35.1',
    '1.35.0',
    '1.34.0',
    '1.33.0',
    '1.32.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type YamllintPackage = typeof yamllintPackage
