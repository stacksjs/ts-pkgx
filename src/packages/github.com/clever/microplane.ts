/**
 * **microplane** - Package from pantry: github.com/clever/microplane
 *
 * @domain `github.com/clever/microplane`
 *
 * @install `launchpad install github.com/clever/microplane`
 * @dependencies `git-scm.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomclevermicroplane
 * console.log(pkg.name)        // "microplane"
 * console.log(pkg.description) // "Package from pantry: github.com/clever/microplane"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/clever/microplane.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomclevermicroplanePackage = {
  /**
   * The display name of this package.
   */
  name: 'microplane' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/clever/microplane' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/clever/microplane' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/clever/microplane' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/clever/microplane -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/clever/microplane' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/clever/microplane/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomclevermicroplanePackage = typeof githubcomclevermicroplanePackage
