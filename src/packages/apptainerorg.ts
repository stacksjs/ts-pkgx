/**
 * **apptainer.org** - Application container and unprivileged sandbox platform for Linux
 *
 * @domain `apptainer.org`
 * @programs `apptainer`, `run-singularity`, `singularity`
 * @version `1.4.3` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install apptainer.org`
 * @dependencies `github.com/seccomp/libseccomp@2`, `curl.se/ca-certs`
 * @companions `github.com/plougher/squashfs-tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apptainerorg
 * console.log(pkg.name)        // "apptainer.org"
 * console.log(pkg.description) // "Application container and unprivileged sandbox ..."
 * console.log(pkg.programs)    // ["apptainer", "run-singularity", ...]
 * console.log(pkg.versions[0]) // "1.4.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apptainer-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apptainerorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'apptainer.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apptainer.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Application container and unprivileged sandbox platform for Linux' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apptainer.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apptainer.org' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'apptainer',
    'run-singularity',
    'singularity',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'github.com/plougher/squashfs-tools',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/seccomp/libseccomp@2',
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.3',
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.6',
    '1.3.5',
    '1.3.4',
    '1.3.3',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apptainer.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apptainer.org' as const,
}

export type ApptainerorgPackage = typeof apptainerorgPackage
