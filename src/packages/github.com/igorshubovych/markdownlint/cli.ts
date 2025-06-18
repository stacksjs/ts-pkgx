/**
 * **github.com/igorshubovych/markdownlint-cli** - pkgx package
 *
 * @domain `github.com/igorshubovych/markdownlint/cli`
 *
 * @install `pkgx github.com/igorshubovych/markdownlint-cli`
 * @aliases `github.com/igorshubovych/markdownlint-cli`, `igorshubovych/markdownlint-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomigorshubovychmarkdownlintcli
 * // Or access via domain
 * const samePkg = pantry.githubcomigorshubovychmarkdownlintcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "igorshubovych"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/igorshubovych/markdownlint/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomigorshubovychmarkdownlintcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'igorshubovych' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/igorshubovych/markdownlint/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/igorshubovych/markdownlint-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/igorshubovych/markdownlint-cli',
    'igorshubovych/markdownlint-cli',
  ] as const,
  fullPath: 'github.com/igorshubovych/markdownlint-cli' as const,
}

export type GithubcomigorshubovychmarkdownlintcliPackage = typeof githubcomigorshubovychmarkdownlintcliPackage
