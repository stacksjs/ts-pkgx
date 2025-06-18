/**
 * **kubeshark.co** - Package from pantry: kubeshark.co
 *
 * @domain `kubeshark.co`
 *
 * @install `launchpad install kubeshark.co`
 * @dependencies `go.dev^1.19`, `gnu.org/make`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kubesharkco
 * console.log(pkg.name)        // "kubeshark.co"
 * console.log(pkg.description) // "Package from pantry: kubeshark.co"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kubeshark-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kubesharkcoPackage = {
  /**
   * The display name of this package.
   */
  name: 'kubeshark.co' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kubeshark.co' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kubeshark.co' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kubeshark.co' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
    'gnu.org/make',
    'git-scm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubeshark.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KubesharkcoPackage = typeof kubesharkcoPackage
