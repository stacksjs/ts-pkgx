/**
 * **az** - Azure Command-Line Interface
 *
 * @domain `microsoft.com/azure-cli`
 * @programs `az`
 * @version `2.75.0` (33 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install az`
 * @name `az`
 * @dependencies `openssl.org@1.1`, `python.org>=3.10<3.12`, `sourceware.org/libffi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.az
 * // Or access via domain
 * const samePkg = pantry.microsoftcomazurecli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "az"
 * console.log(pkg.description) // "Azure Command-Line Interface"
 * console.log(pkg.programs)    // ["az"]
 * console.log(pkg.versions[0]) // "2.75.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/azure-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const azPackage = {
  /**
   * The display name of this package.
   */
  name: 'az' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/azure-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Azure Command-Line Interface' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/azure-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install az' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'az',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org@1.1',
    'python.org>=3.10<3.12',
    'sourceware.org/libffi',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.75.0',
    '2.74.0',
    '2.73.0',
    '2.72.0',
    '2.71.0',
    '2.70.0',
    '2.69.0',
    '2.68.0',
    '2.67.0',
    '2.66.1',
    '2.66.0',
    '2.65.0',
    '2.64.0',
    '2.63.0',
    '2.62.0',
    '2.61.0',
    '2.60.0',
    '2.59.0',
    '2.58.0',
    '2.57.0',
    '2.56.0',
    '2.55.0',
    '2.54.0',
    '2.53.1',
    '2.53.0',
    '2.52.0',
    '2.51.0',
    '2.50.0',
    '2.49.0',
    '2.48.1',
    '2.48.0',
    '2.47.0',
    '2.45.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) az -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install az' as const,
}

export type AzPackage = typeof azPackage
