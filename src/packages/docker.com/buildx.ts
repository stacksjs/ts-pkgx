/**
 * **buildx** - Docker CLI plugin for extended build capabilities with BuildKit
 *
 * @domain `docker.com/buildx`
 * @programs `buildx`
 * @version `0.26.0` (27 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install buildx`
 * @name `buildx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.buildx
 * // Or access via domain
 * const samePkg = pantry.dockercombuildx
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "buildx"
 * console.log(pkg.description) // "Docker CLI plugin for extended build capabiliti..."
 * console.log(pkg.programs)    // ["buildx"]
 * console.log(pkg.versions[0]) // "0.26.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docker-com/buildx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const buildxPackage = {
  /**
   * The display name of this package.
   */
  name: 'buildx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docker.com/buildx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Docker CLI plugin for extended build capabilities with BuildKit' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docker.com/buildx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/docker/buildx' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install buildx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'buildx',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.26.0',
    '0.25.0',
    '0.24.0',
    '0.23.0',
    '0.22.0',
    '0.21.3',
    '0.21.2',
    '0.21.1',
    '0.21.0',
    '0.20.1',
    '0.20.0',
    '0.19.3',
    '0.19.2',
    '0.19.1',
    '0.19.0',
    '0.18.0',
    '0.17.1',
    '0.17.0',
    '0.16.2',
    '0.16.1',
    '0.16.0',
    '0.15.1',
    '0.15.0',
    '0.14.1',
    '0.14.0',
    '0.13.1',
    '0.13.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) buildx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install buildx' as const,
}

export type BuildxPackage = typeof buildxPackage
