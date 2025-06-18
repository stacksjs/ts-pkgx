/**
 * **microsoft.com/azure-storage-azcopy** - pkgx package
 *
 * @domain `microsoft.com/azure/storage-azcopy`
 *
 * @install `pkgx microsoft.com/azure-storage-azcopy`
 * @name `azure-storage-azcopy`
 * @aliases `microsoft.com/azure-storage-azcopy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.microsoftcomazurestorageazcopy
 * // Or access via domain
 * const samePkg = pantry.microsoftcomazurestorageazcopy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "azure-storage-azcopy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/azure/storage-azcopy.md
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
  domain: 'microsoft.com/azure/storage-azcopy' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx microsoft.com/azure-storage-azcopy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'microsoft.com/azure-storage-azcopy',
  ] as const,
  fullPath: 'microsoft.com/azure-storage-azcopy' as const,
}

export type MicrosoftcomazurestorageazcopyPackage = typeof microsoftcomazurestorageazcopyPackage
