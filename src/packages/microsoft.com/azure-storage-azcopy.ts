/**
 * **azcopy** - The new Azure Storage data transfer utility - AzCopy v10
 *
 * @domain `microsoft.com/azure-storage-azcopy`
 * @programs `azcopy`
 * @version `10.30.0` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install azcopy`
 * @name `azcopy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.azcopy
 * // Or access via domain
 * const samePkg = pantry.microsoftcomazurestorageazcopy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "azcopy"
 * console.log(pkg.description) // "The new Azure Storage data transfer utility - A..."
 * console.log(pkg.programs)    // ["azcopy"]
 * console.log(pkg.versions[0]) // "10.30.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/azure-storage-azcopy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const azcopyPackage = {
  /**
   * The display name of this package.
   */
  name: 'azcopy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/azure-storage-azcopy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The new Azure Storage data transfer utility - AzCopy v10' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/azure-storage-azcopy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/Azure/azure-storage-azcopy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install azcopy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'azcopy',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '10.30.0',
    '10.29.1',
    '10.29.0',
    '10.28.1',
    '10.28.0',
    '10.27.1',
    '10.27.0',
    '10.26.0',
    '10.25.1',
    '10.25.0',
    '10.24.0',
    '10.23.0',
    '10.22.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) azcopy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install azcopy' as const,
}

export type AzcopyPackage = typeof azcopyPackage
