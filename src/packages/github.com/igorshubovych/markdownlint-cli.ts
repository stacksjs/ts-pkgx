/**
 * **markdownlint** - CLI for Node.js style checker and lint tool for Markdown files
 *
 * @domain `github.com/igorshubovych/markdownlint-cli`
 * @programs `markdownlint`
 * @version `0.45.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install markdownlint`
 * @aliases `markdownlint`
 * @dependencies `nodejs.org^18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.markdownlint
 * // Or access via domain
 * const samePkg = pantry.githubcomigorshubovychmarkdownlintcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "markdownlint-cli"
 * console.log(pkg.description) // "CLI for Node.js style checker and lint tool for..."
 * console.log(pkg.programs)    // ["markdownlint"]
 * console.log(pkg.versions[0]) // "0.45.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/igorshubovych/markdownlint-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const markdownlintPackage = {
  /**
   * The display name of this package.
   */
  name: 'markdownlint-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/igorshubovych/markdownlint-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI for Node.js style checker and lint tool for Markdown files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/igorshubovych/markdownlint-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install markdownlint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'markdownlint',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^18',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.45.0',
    '0.44.0',
    '0.43.0',
    '0.42.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'markdownlint',
  ] as const,
}

export type MarkdownlintPackage = typeof markdownlintPackage
