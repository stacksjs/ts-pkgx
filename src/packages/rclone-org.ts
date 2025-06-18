/**
 * **rclone** - "rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files
 *
 * @domain `rclone.org`
 * @programs `rclone`
 * @version `1.70.0` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) rclone`
 * @name `rclone`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rclone
 * // Or access via domain
 * const samePkg = pantry.rcloneorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rclone"
 * console.log(pkg.description) // ""rsync for cloud storage" - Google Drive, S3, D..."
 * console.log(pkg.programs)    // ["rclone"]
 * console.log(pkg.versions[0]) // "1.70.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rclone-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rclonePackage = {
  /**
   * The display name of this package.
   */
  name: 'rclone' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rclone.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '"rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rclone.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) rclone' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rclone',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.70.0',
    '1.69.3',
    '1.69.2',
    '1.69.1',
    '1.69.0',
    '1.68.2',
    '1.68.1',
    '1.68.0',
    '1.67.0',
    '1.66.0',
    '1.65.2',
    '1.65.1',
    '1.65.0',
    '1.64.2',
    '1.64.1',
    '1.64.0',
    '1.63.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'rclone.org' as const,
}

export type RclonePackage = typeof rclonePackage
