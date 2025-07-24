/**
 * **trivy** - Package from pantry: aquasecurity.github.io/trivy
 *
 * @domain `aquasecurity.github.io/trivy`
 *
 * @install `launchpad install aquasecurity.github.io/trivy`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aquasecuritygithubiotrivy
 * console.log(pkg.name)        // "trivy"
 * console.log(pkg.description) // "Package from pantry: aquasecurity.github.io/trivy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aquasecurity-github-io/trivy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aquasecuritygithubiotrivyPackage = {
  /**
   * The display name of this package.
   */
  name: 'trivy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aquasecurity.github.io/trivy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: aquasecurity.github.io/trivy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aquasecurity.github.io/trivy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +aquasecurity.github.io/trivy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aquasecurity.github.io/trivy' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aquasecurity.github.io/trivy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AquasecuritygithubiotrivyPackage = typeof aquasecuritygithubiotrivyPackage
