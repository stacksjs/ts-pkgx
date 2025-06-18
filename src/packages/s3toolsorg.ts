/**
 * **s3tools.org** - Package from pantry: s3tools.org
 *
 * @domain `s3tools.org`
 *
 * @install `launchpad install s3tools.org`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.s3toolsorg
 * console.log(pkg.name)        // "s3tools.org"
 * console.log(pkg.description) // "Package from pantry: s3tools.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/s3tools-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const s3toolsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 's3tools.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 's3tools.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: s3tools.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install s3tools.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/s3tools.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type S3toolsorgPackage = typeof s3toolsorgPackage
