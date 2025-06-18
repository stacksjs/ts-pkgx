/**
 * **jenkins.io** - Package from pantry: jenkins.io
 *
 * @domain `jenkins.io`
 *
 * @install `launchpad install jenkins.io`
 * @dependencies `openjdk.org<20`, `curl.se`, `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jenkinsio
 * console.log(pkg.name)        // "jenkins.io"
 * console.log(pkg.description) // "Package from pantry: jenkins.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jenkins-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jenkinsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'jenkins.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jenkins.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jenkins.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install jenkins.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org<20',
    'curl.se',
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jenkins.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JenkinsioPackage = typeof jenkinsioPackage
