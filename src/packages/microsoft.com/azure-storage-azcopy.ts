/**
 * **azure-storage-azcopy** - Package from pantry: microsoft.com/azure-storage-azcopy
 *
 * @domain `microsoft.com/azure-storage-azcopy`
 *
 * @install `launchpad install microsoft.com/azure-storage-azcopy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microsoftcomazurestorageazcopy
 * console.log(pkg.name)        // "azure-storage-azcopy"
 * console.log(pkg.description) // "Package from pantry: microsoft.com/azure-storag..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/azure-storage-azcopy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcomazurestorageazcopyPackage = {
  /**
   * The display name of this package.
   */
  name: 'azure-storage-azcopy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/azure-storage-azcopy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: microsoft.com/azure-storage-azcopy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install microsoft.com/azure-storage-azcopy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +microsoft.com/azure-storage-azcopy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install microsoft.com/azure-storage-azcopy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/azure-storage-azcopy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MicrosoftcomazurestorageazcopyPackage = typeof microsoftcomazurestorageazcopyPackage
