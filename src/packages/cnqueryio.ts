/**
 * **cnquery** - open source, cloud-native, graph-based asset inventory
 *
 * @domain `cnquery.io`
 * @programs `cnquery`
 * @version `12.7.1` (174 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cnquery.io`
 * @homepage https://cnquery.io
 * @buildDependencies `go.dev@~1.21` - required only when building from source
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cnqueryio
 * console.log(pkg.name)        // "cnquery"
 * console.log(pkg.description) // "open source, cloud-native, graph-based asset in..."
 * console.log(pkg.programs)    // ["cnquery"]
 * console.log(pkg.versions[0]) // "12.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cnquery-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cnqueryioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cnquery' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cnquery.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'open source, cloud-native, graph-based asset inventory' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cnquery.io/package.yml' as const,
  homepageUrl: 'https://cnquery.io' as const,
  githubUrl: 'https://github.com/mondoohq/cnquery' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cnquery.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cnquery.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cnquery.io' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cnquery',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Build dependencies for this package.
   * These are only required when building the package from source.
   */
  buildDependencies: [
    'go.dev@~1.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '12.7.1',
    '12.7.0',
    '12.6.0',
    '12.5.1',
    '12.5.0',
    '12.4.0',
    '12.3.0',
    '12.2.1',
    '12.2.0',
    '12.1.0',
    '12.0.0',
    '11.69.1',
    '11.69.0',
    '11.68.0',
    '11.67.1',
    '11.67.0',
    '11.66.1',
    '11.66.0',
    '11.65.0',
    '11.64.0',
    '11.63.1',
    '11.63.0',
    '11.62.1',
    '11.62.0',
    '11.61.0',
    '11.60.0',
    '11.59.0',
    '11.58.0',
    '11.57.2',
    '11.57.1',
    '11.57.0',
    '11.56.0',
    '11.55.0',
    '11.54.0',
    '11.53.2',
    '11.53.1',
    '11.53.0',
    '11.52.0',
    '11.51.2',
    '11.51.1',
    '11.51.0',
    '11.50.0',
    '11.49.0',
    '11.48.0',
    '11.47.1',
    '11.47.0',
    '11.46.2',
    '11.46.1',
    '11.46.0',
    '11.45.1',
    '11.45.0',
    '11.44.0',
    '11.43.0',
    '11.42.0',
    '11.41.0',
    '11.40.0',
    '11.39.0',
    '11.38.0',
    '11.37.1',
    '11.37.0',
    '11.36.2',
    '11.36.1',
    '11.36.0',
    '11.35.0',
    '11.34.0',
    '11.33.1',
    '11.33.0',
    '11.32.0',
    '11.31.1',
    '11.31.0',
    '11.30.2',
    '11.30.1',
    '11.30.0',
    '11.29.0',
    '11.28.1',
    '11.28.0',
    '11.27.0',
    '11.26.0',
    '11.25.0',
    '11.24.0',
    '11.23.2',
    '11.23.1',
    '11.23.0',
    '11.22.0',
    '11.21.1',
    '11.21.0',
    '11.20.1',
    '11.20.0',
    '11.19.1',
    '11.19.0',
    '11.18.0',
    '11.17.0',
    '11.16.1',
    '11.16.0',
    '11.15.1',
    '11.15.0',
    '11.14.1',
    '11.14.0',
    '11.13.2',
    '11.13.1',
    '11.13.0',
    '11.12.2',
    '11.12.1',
    '11.12.0',
    '11.11.0',
    '11.10.0',
    '11.9.1',
    '11.9.0',
    '11.8.0',
    '11.7.3',
    '11.7.2',
    '11.7.1',
    '11.7.0',
    '11.6.3',
    '11.6.2',
    '11.6.1',
    '11.6.0',
    '11.5.0',
    '11.4.3',
    '11.4.2',
    '11.4.1',
    '11.4.0',
    '11.3.1',
    '11.3.0',
    '11.2.0',
    '11.1.1',
    '11.1.0',
    '11.0.2',
    '11.0.1',
    '11.0.0',
    '10.12.2',
    '10.12.1',
    '10.12.0',
    '10.11.1',
    '10.11.0',
    '10.10.0',
    '10.9.3',
    '10.9.2',
    '10.9.1',
    '10.9.0',
    '10.8.4',
    '10.8.3',
    '10.8.2',
    '10.8.1',
    '10.8.0',
    '10.7.3',
    '10.7.2',
    '10.7.1',
    '10.7.0',
    '10.6.1',
    '10.6.0',
    '10.5.0',
    '10.4.2',
    '10.4.1',
    '10.4.0',
    '10.3.4',
    '10.3.3',
    '10.3.2',
    '10.3.1',
    '10.3.0',
    '10.2.0',
    '10.1.6',
    '10.1.5',
    '10.1.4',
    '10.1.3',
    '10.1.2',
    '10.1.1',
    '10.1.0',
    '10.0.3',
    '10.0.2',
    '10.0.1',
    '10.0.0',
    '9.14.0',
    '9.13.0',
  ] as const,
  aliases: [] as const,
}

export type CnqueryioPackage = typeof cnqueryioPackage
