/**
 * **unzip** - Package from pantry: info-zip.org/unzip
 *
 * @domain `info-zip.org/unzip`
 *
 * @install `launchpad install info-zip.org/unzip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.infoziporgunzip
 * console.log(pkg.name)        // "unzip"
 * console.log(pkg.description) // "Package from pantry: info-zip.org/unzip"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/info-zip-org/unzip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const infoziporgunzipPackage = {
  /**
   * The display name of this package.
   */
  name: 'unzip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'info-zip.org/unzip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: info-zip.org/unzip' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install info-zip.org/unzip' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +info-zip.org/unzip -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install info-zip.org/unzip' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/info-zip.org/unzip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type InfoziporgunzipPackage = typeof infoziporgunzipPackage
