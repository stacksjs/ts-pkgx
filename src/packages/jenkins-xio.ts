/**
 * **jx** - Jenkins X provides automated CI+CD for Kubernetes with Preview Environments on Pull Requests using Cloud Native pipelines from Tekton
 *
 * @domain `jenkins-x.io`
 * @programs `jx`
 * @version `3.11.108` (61 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jx`
 * @name `Jenkins X`
 * @aliases `jx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jx
 * // Or access via domain
 * const samePkg = pantry.jenkinsxio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Jenkins X"
 * console.log(pkg.description) // "Jenkins X provides automated CI+CD for Kubernet..."
 * console.log(pkg.programs)    // ["jx"]
 * console.log(pkg.versions[0]) // "3.11.108" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jenkins-x-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jxPackage = {
  /**
   * The display name of this package.
   */
  name: 'Jenkins X' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jenkins-x.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Jenkins X provides automated CI+CD for Kubernetes with Preview Environments on Pull Requests using Cloud Native pipelines from Tekton' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jenkins-x.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jx',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.11.108',
    '3.11.107',
    '3.11.105',
    '3.11.92',
    '3.11.90',
    '3.11.87',
    '3.11.81',
    '3.11.78',
    '3.11.77',
    '3.11.76',
    '3.11.75',
    '3.11.74',
    '3.11.71',
    '3.11.70',
    '3.11.69',
    '3.11.66',
    '3.11.65',
    '3.11.63',
    '3.11.56',
    '3.11.52',
    '3.11.49',
    '3.11.48',
    '3.11.45',
    '3.11.44',
    '3.11.41',
    '3.11.39',
    '3.11.38',
    '3.11.27',
    '3.11.26',
    '3.11.25',
    '3.11.24',
    '3.11.21',
    '3.11.17',
    '3.11.14',
    '3.11.11',
    '3.11.10',
    '3.11.8',
    '3.11.7',
    '3.11.5',
    '3.11.4',
    '3.11.2',
    '3.11.1',
    '3.11.0',
    '3.10.182',
    '3.10.181',
    '3.10.180',
    '3.10.178',
    '3.10.177',
    '3.10.176',
    '3.10.172',
    '3.10.170',
    '3.10.169',
    '3.10.167',
    '3.10.166',
    '3.10.161',
    '3.10.160',
    '3.10.158',
    '3.10.157',
    '3.10.156',
    '3.10.155',
    '3.10.154',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jx',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) jx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jx' as const,
}

export type JxPackage = typeof jxPackage
