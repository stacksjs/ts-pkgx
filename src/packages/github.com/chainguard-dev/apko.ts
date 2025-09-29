/**
 * **apko** - Build OCI images from APK packages directly without Dockerfile
 *
 * @domain `github.com/chainguard-dev/apko`
 * @programs `apko`
 * @version `0.30.13` (76 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install apko`
 * @name `apko`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.apko
 * // Or access via domain
 * const samePkg = pantry.githubcomchainguarddevapko
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "apko"
 * console.log(pkg.description) // "Build OCI images from APK packages directly wit..."
 * console.log(pkg.programs)    // ["apko"]
 * console.log(pkg.versions[0]) // "0.30.13" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/chainguard-dev/apko.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apkoPackage = {
  /**
   * The display name of this package.
   */
  name: 'apko' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/chainguard-dev/apko' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Build OCI images from APK packages directly without Dockerfile' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/chainguard-dev/apko/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/chainguard-dev/apko' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apko' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'apko',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.30.13',
    '0.30.12',
    '0.30.11',
    '0.30.10',
    '0.30.9',
    '0.30.8',
    '0.30.7',
    '0.30.6',
    '0.30.5',
    '0.30.4',
    '0.30.3',
    '0.30.2',
    '0.30.1',
    '0.30.0',
    '0.29.10',
    '0.29.9',
    '0.29.8',
    '0.29.7',
    '0.29.6',
    '0.29.5',
    '0.29.4',
    '0.29.3',
    '0.29.2',
    '0.29.1',
    '0.29.0',
    '0.28.0',
    '0.27.9',
    '0.27.8',
    '0.27.7',
    '0.27.6',
    '0.27.5',
    '0.27.4',
    '0.27.3',
    '0.27.2',
    '0.27.1',
    '0.27.0',
    '0.26.1',
    '0.26.0',
    '0.25.7',
    '0.25.6',
    '0.25.5',
    '0.25.4',
    '0.25.3',
    '0.25.2',
    '0.25.1',
    '0.25.0',
    '0.24.0',
    '0.23.0',
    '0.22.7',
    '0.22.6',
    '0.22.5',
    '0.22.4',
    '0.22.3',
    '0.22.2',
    '0.22.1',
    '0.22.0',
    '0.21.0',
    '0.20.2',
    '0.20.1',
    '0.20.0',
    '0.19.9',
    '0.19.8',
    '0.19.7',
    '0.19.6',
    '0.19.5',
    '0.19.4',
    '0.19.3',
    '0.19.1',
    '0.18.1',
    '0.18.0',
    '0.16.0',
    '0.14.7',
    '0.14.6',
    '0.14.5',
    '0.14.1',
    '0.13.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) apko -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apko' as const,
}

export type ApkoPackage = typeof apkoPackage
