/**
 * **mercure.rocks** - Package from pantry: mercure.rocks
 *
 * @domain `mercure.rocks`
 *
 * @install `launchpad install mercure.rocks`
 * @dependencies `go.dev^1.19`, `goreleaser.com>=2.4.2`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mercurerocks
 * console.log(pkg.name)        // "mercure.rocks"
 * console.log(pkg.description) // "Package from pantry: mercure.rocks"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mercure-rocks.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mercurerocksPackage = {
  /**
   * The display name of this package.
   */
  name: 'mercure.rocks' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mercure.rocks' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mercure.rocks' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mercure.rocks' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
    'goreleaser.com>=2.4.2',
    'git-scm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mercure.rocks/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MercurerocksPackage = typeof mercurerocksPackage
