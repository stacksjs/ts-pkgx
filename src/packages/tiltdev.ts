/**
 * **tilt** - Define your dev environment as code. For microservice apps on Kubernetes.
 *
 * @domain `tilt.dev`
 * @programs `tilt`
 * @version `0.35.0` (24 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tilt`
 * @aliases `tilt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tilt
 * // Or access via domain
 * const samePkg = pantry.tiltdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tilt.dev"
 * console.log(pkg.description) // "Define your dev environment as code. For micros..."
 * console.log(pkg.programs)    // ["tilt"]
 * console.log(pkg.versions[0]) // "0.35.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tilt-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tiltPackage = {
  /**
   * The display name of this package.
   */
  name: 'tilt.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tilt.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Define your dev environment as code. For microservice apps on Kubernetes.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tilt.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tilt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tilt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.35.0',
    '0.34.5',
    '0.34.4',
    '0.34.3',
    '0.34.2',
    '0.34.1',
    '0.34.0',
    '0.33.22',
    '0.33.21',
    '0.33.20',
    '0.33.19',
    '0.33.18',
    '0.33.17',
    '0.33.16',
    '0.33.15',
    '0.33.14',
    '0.33.13',
    '0.33.12',
    '0.33.11',
    '0.33.10',
    '0.33.9',
    '0.33.8',
    '0.33.7',
    '0.33.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tilt',
  ] as const,
}

export type TiltPackage = typeof tiltPackage
