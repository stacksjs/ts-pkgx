/**
 * **nak** - Package from pantry: github.com/fiatjaf/nak
 *
 * @domain `github.com/fiatjaf/nak`
 *
 * @install `launchpad install github.com/fiatjaf/nak`
 * @dependencies `go.dev~1.23.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomfiatjafnak
 * console.log(pkg.name)        // "nak"
 * console.log(pkg.description) // "Package from pantry: github.com/fiatjaf/nak"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fiatjaf/nak.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomfiatjafnakPackage = {
  /**
   * The display name of this package.
   */
  name: 'nak' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fiatjaf/nak' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/fiatjaf/nak' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/fiatjaf/nak' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.23.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/fiatjaf/nak/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomfiatjafnakPackage = typeof githubcomfiatjafnakPackage
