/**
 * **buildctl** - concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit
 *
 * @domain `github.com/moby/buildkit`
 * @programs `buildctl`
 * @version `0.24.0` (29 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install buildctl`
 * @name `buildkit`
 * @aliases `buildctl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.buildctl
 * // Or access via domain
 * const samePkg = pantry.githubcommobybuildkit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "buildkit"
 * console.log(pkg.description) // "concurrent, cache-efficient, and Dockerfile-agn..."
 * console.log(pkg.programs)    // ["buildctl"]
 * console.log(pkg.versions[0]) // "0.24.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/moby/buildkit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const buildctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'buildkit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/moby/buildkit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/moby/buildkit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install buildctl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'buildctl',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.24.0',
    '0.23.2',
    '0.23.1',
    '0.23.0',
    '0.22.0',
    '0.21.1',
    '0.21.0',
    '0.20.2',
    '0.20.1',
    '0.20.0',
    '0.19.0',
    '0.18.2',
    '0.18.1',
    '0.18.0',
    '0.17.3',
    '0.17.2',
    '0.17.1',
    '0.17.0',
    '0.16.0',
    '0.15.2',
    '0.15.1',
    '0.15.0',
    '0.14.1',
    '0.14.0',
    '0.13.2',
    '0.13.1',
    '0.13.0',
    '0.12.5',
    '0.12.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'buildctl',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) buildctl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install buildctl' as const,
}

export type BuildctlPackage = typeof buildctlPackage
