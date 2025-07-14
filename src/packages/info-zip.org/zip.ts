/**
 * **zip** - Package from pantry: info-zip.org/zip
 *
 * @domain `info-zip.org/zip`
 *
 * @install `launchpad install info-zip.org/zip`
 * @dependencies `sourceware.org/bzip2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.infoziporgzip
 * console.log(pkg.name)        // "zip"
 * console.log(pkg.description) // "Package from pantry: info-zip.org/zip"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/info-zip-org/zip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const infoziporgzipPackage = {
  /**
   * The display name of this package.
   */
  name: 'zip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'info-zip.org/zip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: info-zip.org/zip' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install info-zip.org/zip' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +info-zip.org/zip -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install info-zip.org/zip' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/bzip2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/info-zip.org/zip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type InfoziporgzipPackage = typeof infoziporgzipPackage
