/**
 * **markdownlint-cli** - Package from pantry: github.com/igorshubovych/markdownlint-cli
 *
 * @domain `github.com/igorshubovych/markdownlint-cli`
 *
 * @install `launchpad install github.com/igorshubovych/markdownlint-cli`
 * @dependencies `nodejs.org^18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomigorshubovychmarkdownlintcli
 * console.log(pkg.name)        // "markdownlint-cli"
 * console.log(pkg.description) // "Package from pantry: github.com/igorshubovych/m..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/igorshubovych/markdownlint-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomigorshubovychmarkdownlintcliPackage = {
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
  description: 'Package from pantry: github.com/igorshubovych/markdownlint-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/igorshubovych/markdownlint-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/igorshubovych/markdownlint-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/igorshubovych/markdownlint-cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^18',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/igorshubovych/markdownlint-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomigorshubovychmarkdownlintcliPackage = typeof githubcomigorshubovychmarkdownlintcliPackage
