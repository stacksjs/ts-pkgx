/**
 * **k9scli.io** - Package from pantry: k9scli.io
 *
 * @domain `k9scli.io`
 *
 * @install `launchpad install k9scli.io`
 * @dependencies `go.dev^1.18`, `gnu.org/make`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.k9scliio
 * console.log(pkg.name)        // "k9scli.io"
 * console.log(pkg.description) // "Package from pantry: k9scli.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/k9scli-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const k9scliioPackage = {
  /**
   * The display name of this package.
   */
  name: 'k9scli.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'k9scli.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: k9scli.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install k9scli.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
    'gnu.org/make',
    'git-scm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/k9scli.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type K9scliioPackage = typeof k9scliioPackage
