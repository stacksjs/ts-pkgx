/**
 * **sftpgo** - Full-featured and highly configurable SFTP, HTTP/S, FTP/S and WebDAV server - S3, Google Cloud Storage, Azure Blob
 *
 * @domain `sftpgo.com`
 * @programs `sftpgo`
 * @version `2.6.6` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sftpgo`
 * @aliases `sftpgo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sftpgo
 * // Or access via domain
 * const samePkg = pantry.sftpgocom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sftpgo.com"
 * console.log(pkg.description) // "Full-featured and highly configurable SFTP, HTT..."
 * console.log(pkg.programs)    // ["sftpgo"]
 * console.log(pkg.versions[0]) // "2.6.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sftpgo-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sftpgoPackage = {
  /**
   * The display name of this package.
   */
  name: 'sftpgo.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sftpgo.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Full-featured and highly configurable SFTP, HTTP/S, FTP/S and WebDAV server - S3, Google Cloud Storage, Azure Blob' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sftpgo.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install sftpgo' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sftpgo',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.6',
    '2.6.5',
    '2.6.4',
    '2.6.3',
    '2.6.2',
    '2.6.1',
    '2.6.0',
    '2.5.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sftpgo',
  ] as const,
}

export type SftpgoPackage = typeof sftpgoPackage
