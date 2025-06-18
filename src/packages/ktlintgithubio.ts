/**
 * **ktlint.github.io** - Package from pantry: ktlint.github.io
 *
 * @domain `ktlint.github.io`
 *
 * @install `launchpad install ktlint.github.io`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ktlintgithubio
 * console.log(pkg.name)        // "ktlint.github.io"
 * console.log(pkg.description) // "Package from pantry: ktlint.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ktlint-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ktlintgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'ktlint.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ktlint.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ktlint.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ktlint.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ktlint.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KtlintgithubioPackage = typeof ktlintgithubioPackage
