/**
 * **markdownlint** - CLI for Node.js style checker and lint tool for Markdown files
 *
 * @domain `github.com/igorshubovych/markdownlint-cli`
 * @programs `markdownlint`
 * @version `0.45.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/igorshubovych/markdownlint-cli`
 * @dependencies `nodejs.org^18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomigorshubovychmarkdownlintcli
 * console.log(pkg.name)        // "markdownlint"
 * console.log(pkg.description) // "CLI for Node.js style checker and lint tool for..."
 * console.log(pkg.programs)    // ["markdownlint"]
 * console.log(pkg.versions[0]) // "0.45.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/igorshubovych/markdownlint-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomigorshubovychmarkdownlintcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'markdownlint' as const,
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
  githubUrl: 'https://github.com/igorshubovych/markdownlint-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/igorshubovych/markdownlint-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/igorshubovych/markdownlint-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/igorshubovych/markdownlint-cli' as const,
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
  aliases: [] as const,
}

export type GithubcomigorshubovychmarkdownlintcliPackage = typeof githubcomigorshubovychmarkdownlintcliPackage
