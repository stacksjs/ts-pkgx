/**
 * **min.io** - Package from pantry: min.io
 *
 * @domain `min.io`
 *
 * @install `launchpad install min.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.minio
 * console.log(pkg.name)        // "min.io"
 * console.log(pkg.description) // "Package from pantry: min.io"
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
  description: 'Package from pantry: min.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install min.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +min.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install min.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/min.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MinioPackage = typeof minioPackage
