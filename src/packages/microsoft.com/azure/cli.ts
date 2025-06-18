/**
 * **microsoft.com/azure-cli** - pkgx package
 *
 * @domain `microsoft.com/azure/cli`
 *
 * @install `pkgx microsoft.com/azure-cli`
 * @name `azure-cli`
 * @aliases `microsoft.com/azure-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.microsoftcomazurecli
 * // Or access via domain
 * const samePkg = pantry.microsoftcomazurecli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "azure-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/azure/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcomazurecliPackage = {
  /**
   * The display name of this package.
   */
  name: 'azure-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/azure/cli' as const,
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
  installCommand: 'pkgx microsoft.com/azure-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'microsoft.com/azure-cli',
  ] as const,
  fullPath: 'microsoft.com/azure-cli' as const,
}

export type MicrosoftcomazurecliPackage = typeof microsoftcomazurecliPackage
