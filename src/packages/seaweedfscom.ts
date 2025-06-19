/**
 * **weed** - SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding.
 *
 * @domain `seaweedfs.com`
 * @programs `weed`
 * @version `3.91.0` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install weed`
 * @aliases `weed`, `SeaweedFS`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.weed
 * // Or access via domain
 * const samePkg = pantry.seaweedfscom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "seaweedfs.com"
 * console.log(pkg.description) // "SeaweedFS is a fast distributed storage system ..."
 * console.log(pkg.programs)    // ["weed"]
 * console.log(pkg.versions[0]) // "3.91.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/seaweedfs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const weedPackage = {
  /**
   * The display name of this package.
   */
  name: 'seaweedfs.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'seaweedfs.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/seaweedfs.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install weed' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'weed',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.91.0',
    '3.90.0',
    '3.89.0',
    '3.88.0',
    '3.87.0',
    '3.86.0',
    '3.85.0',
    '3.84.0',
    '3.83.0',
    '3.82.0',
    '3.81.0',
    '3.80.0',
    '3.79.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'weed',
    'SeaweedFS',
  ] as const,
}

export type WeedPackage = typeof weedPackage
