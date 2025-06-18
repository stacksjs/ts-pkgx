/**
 * **lporg** - Package from pantry: github.com/blacktop/lporg
 *
 * @domain `github.com/blacktop/lporg`
 *
 * @install `launchpad install github.com/blacktop/lporg`
 * @dependencies `go.dev~1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomblacktoplporg
 * console.log(pkg.name)        // "lporg"
 * console.log(pkg.description) // "Package from pantry: github.com/blacktop/lporg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/blacktop/lporg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomblacktoplporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'lporg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/blacktop/lporg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/blacktop/lporg' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/blacktop/lporg' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/blacktop/lporg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomblacktoplporgPackage = typeof githubcomblacktoplporgPackage
