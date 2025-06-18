/**
 * **jenkins-x.io** - Package from pantry: jenkins-x.io
 *
 * @domain `jenkins-x.io`
 *
 * @install `launchpad install jenkins-x.io`
 * @dependencies `go.dev~1.23`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jenkinsxio
 * console.log(pkg.name)        // "jenkins-x.io"
 * console.log(pkg.description) // "Package from pantry: jenkins-x.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jenkins-x-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jenkinsxioPackage = {
  /**
   * The display name of this package.
   */
  name: 'jenkins-x.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jenkins-x.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jenkins-x.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install jenkins-x.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.23',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jenkins-x.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JenkinsxioPackage = typeof jenkinsxioPackage
