/**
 * **werf** - A solution for implementing efficient and consistent software delivery to Kubernetes facilitating best practices.
 *
 * @domain `werf.io`
 * @programs `werf`
 * @version `2.47.2` (162 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install werf`
 * @name `werf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.werf
 * // Or access via domain
 * const samePkg = pantry.werfio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "werf"
 * console.log(pkg.description) // "A solution for implementing efficient and consi..."
 * console.log(pkg.programs)    // ["werf"]
 * console.log(pkg.versions[0]) // "2.47.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/werf-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const werfPackage = {
  /**
   * The display name of this package.
   */
  name: 'werf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'werf.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A solution for implementing efficient and consistent software delivery to Kubernetes facilitating best practices.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/werf.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install werf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'werf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.47.2',
    '2.47.0',
    '2.46.0',
    '2.45.1',
    '2.45.0',
    '2.44.1',
    '2.44.0',
    '2.43.1',
    '2.43.0',
    '2.42.0',
    '2.41.3',
    '2.41.2',
    '2.41.1',
    '2.41.0',
    '2.39.1',
    '2.39.0',
    '2.38.1',
    '2.38.0',
    '2.37.1',
    '2.37.0',
    '2.36.4',
    '2.36.3',
    '2.36.2',
    '2.36.1',
    '2.36.0',
    '2.35.10',
    '2.35.9',
    '2.35.8',
    '2.35.7',
    '2.35.6',
    '2.35.5',
    '2.35.4',
    '2.35.3',
    '2.35.2',
    '2.35.1',
    '2.35.0',
    '2.34.1',
    '2.34.0',
    '2.33.0',
    '2.32.2',
    '2.32.1',
    '2.32.0',
    '2.31.1',
    '2.31.0',
    '2.30.1',
    '2.30.0',
    '2.29.0',
    '2.28.0',
    '2.27.1',
    '2.27.0',
    '2.26.6',
    '2.26.5',
    '2.26.4',
    '2.26.3',
    '2.26.2',
    '2.26.1',
    '2.26.0',
    '2.25.1',
    '2.25.0',
    '2.24.0',
    '2.23.1',
    '2.23.0',
    '2.22.0',
    '2.21.0',
    '2.20.0',
    '2.19.0',
    '2.18.0',
    '2.17.0',
    '2.16.3',
    '2.16.2',
    '2.16.1',
    '2.16.0',
    '2.15.3',
    '2.15.2',
    '2.15.1',
    '2.15.0',
    '2.14.0',
    '2.13.1',
    '2.13.0',
    '2.12.1',
    '2.12.0',
    '2.11.0',
    '2.10.10',
    '2.10.9',
    '2.10.8',
    '2.10.7',
    '2.10.6',
    '2.10.5',
    '2.10.4',
    '2.10.3',
    '2.10.2',
    '2.10.1',
    '2.10.0',
    '2.9.3',
    '2.9.2',
    '2.9.1',
    '2.9.0',
    '2.8.0',
    '2.7.1',
    '2.7.0',
    '2.6.7',
    '2.6.6',
    '2.6.5',
    '2.6.4',
    '2.6.3',
    '2.6.2',
    '2.6.1',
    '2.6.0',
    '2.5.0',
    '2.4.1',
    '2.4.0',
    '2.3.3',
    '2.3.2',
    '2.3.1',
    '2.3.0',
    '2.2.0',
    '2.1.0',
    '2.0.4',
    '2.0.3',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.2.334',
    '1.2.333',
    '1.2.332',
    '1.2.331',
    '1.2.330',
    '1.2.329',
    '1.2.328',
    '1.2.327',
    '1.2.326',
    '1.2.325',
    '1.2.324',
    '1.2.323',
    '1.2.322',
    '1.2.321',
    '1.2.320',
    '1.2.318',
    '1.2.317',
    '1.2.316',
    '1.2.315',
    '1.2.313',
    '1.2.312',
    '1.2.311',
    '1.2.310',
    '1.2.309',
    '1.2.308',
    '1.2.307',
    '1.2.306',
    '1.2.305',
    '1.2.303',
    '1.2.302',
    '1.2.301',
    '1.2.300',
    '1.2.299',
    '1.2.298',
    '1.2.297',
    '1.2.296',
    '1.2.295',
    '1.2.294',
    '1.1.36',
    '1.1.35',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) werf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install werf' as const,
}

export type WerfPackage = typeof werfPackage
