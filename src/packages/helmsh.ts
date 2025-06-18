/**
 * **helm.sh** - Package from pantry: helm.sh
 *
 * @domain `helm.sh`
 *
 * @install `launchpad install helm.sh`
 * @dependencies `go.dev^1.19`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.helmsh
 * console.log(pkg.name)        // "helm.sh"
 * console.log(pkg.description) // "Package from pantry: helm.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/helm-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const helmshPackage = {
  /**
   * The display name of this package.
   */
  name: 'helm.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'helm.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: helm.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install helm.sh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/helm.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HelmshPackage = typeof helmshPackage
