/**
 * **minio** - MinIO is a high-performance, S3 compatible object store, open sourced under GNU AGPLv3 license.
 *
 * @domain `min.io`
 * @programs `minio`
 * @version `2023.10.25.6.33.25` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install minio`
 * @aliases `minio`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.minio
 * // Or access via domain
 * const samePkg = pantry.minio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "min.io"
 * console.log(pkg.description) // "MinIO is a high-performance, S3 compatible obje..."
 * console.log(pkg.programs)    // ["minio"]
 * console.log(pkg.versions[0]) // "2023.10.25.6.33.25" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/min-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const minioPackage = {
  /**
   * The display name of this package.
   */
  name: 'min.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'min.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'MinIO is a high-performance, S3 compatible object store, open sourced under GNU AGPLv3 license.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/min.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install minio' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'minio',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.10.25.6.33.25',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'minio',
  ] as const,
}

export type MinioPackage = typeof minioPackage
