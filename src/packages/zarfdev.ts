/**
 * **zarf** - DevSecOps for Air Gap & Limited-Connection Systems. https://zarf.dev/
 *
 * @domain `zarf.dev`
 * @programs `zarf`
 * @version `0.63.0` (55 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install zarf.dev`
 * @buildDependencies `go.dev` - required only when building from source
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zarfdev
 * console.log(pkg.name)        // "zarf"
 * console.log(pkg.description) // "DevSecOps for Air Gap & Limited-Connection Syst..."
 * console.log(pkg.programs)    // ["zarf"]
 * console.log(pkg.versions[0]) // "0.63.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zarf-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zarfdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'zarf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zarf.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'DevSecOps for Air Gap & Limited-Connection Systems. https://zarf.dev/' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zarf.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/defenseunicorns/zarf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install zarf.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +zarf.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install zarf.dev' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zarf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Build dependencies for this package.
   * These are only required when building the package from source.
   */
  buildDependencies: [
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.63.0',
    '0.62.0',
    '0.61.2',
    '0.61.1',
    '0.61.0',
    '0.60.0',
    '0.59.0',
    '0.58.0',
    '0.57.0',
    '0.56.0',
    '0.55.6',
    '0.55.5',
    '0.55.4',
    '0.55.2',
    '0.55.1',
    '0.54.0',
    '0.53.0',
    '0.52.1',
    '0.52.0',
    '0.51.0',
    '0.50.0',
    '0.49.1',
    '0.49.0',
    '0.48.1',
    '0.48.0',
    '0.47.0',
    '0.46.0',
    '0.45.0',
    '0.44.0',
    '0.43.1',
    '0.43.0',
    '0.42.2',
    '0.42.1',
    '0.42.0',
    '0.41.0',
    '0.40.1',
    '0.39.0',
    '0.38.3',
    '0.38.2',
    '0.38.1',
    '0.38.0',
    '0.37.0',
    '0.36.1',
    '0.36.0',
    '0.35.0',
    '0.34.0',
    '0.33.2',
    '0.33.1',
    '0.33.0',
    '0.32.6',
    '0.32.5',
    '0.32.4',
    '0.32.3',
    '0.32.2',
    '0.32.1',
  ] as const,
  aliases: [] as const,
}

export type ZarfdevPackage = typeof zarfdevPackage
