/**
 * **jenkins.io** - Extendable open source continuous integration server
 *
 * @domain `jenkins.io`
 * @programs `jenkins-lts`, `jenkins-lts-cli`
 * @version `2.504.2` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +jenkins.io -- $SHELL -i`
 * @dependencies `openjdk.org<20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jenkinsio
 * console.log(pkg.name)        // "jenkins.io"
 * console.log(pkg.description) // "Extendable open source continuous integration s..."
 * console.log(pkg.programs)    // ["jenkins-lts", "jenkins-lts-cli"]
 * console.log(pkg.versions[0]) // "2.504.2" (latest)
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
  description: 'Extendable open source continuous integration server' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jenkins.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +jenkins.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jenkins-lts',
    'jenkins-lts-cli',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org<20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.504.2',
    '2.504.1',
    '2.492.3',
    '2.492.2',
    '2.492.1',
    '2.479.3',
    '2.479.2',
    '2.479.1',
    '2.462.3',
    '2.462.2',
    '2.462.1',
    '2.452.3',
    '2.452.2',
    '2.452.1',
    '2.440.3',
    '2.440.2',
    '2.440.1',
    '2.426.3',
    '2.426.2',
  ] as const,
  aliases: [] as const,
}

export type JenkinsioPackage = typeof jenkinsioPackage
