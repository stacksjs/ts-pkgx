/**
 * **s3cmd** - Package from pantry: s3tools.org/s3cmd
 *
 * @domain `s3tools.org/s3cmd`
 *
 * @install `launchpad install s3tools.org/s3cmd`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.s3toolsorgs3cmd
 * console.log(pkg.name)        // "s3cmd"
 * console.log(pkg.description) // "Package from pantry: s3tools.org/s3cmd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/s3tools-org/s3cmd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const s3toolsorgs3cmdPackage = {
  /**
   * The display name of this package.
   */
  name: 's3cmd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 's3tools.org/s3cmd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: s3tools.org/s3cmd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install s3tools.org/s3cmd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +s3tools.org/s3cmd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install s3tools.org/s3cmd' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/s3tools.org/s3cmd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type S3toolsorgs3cmdPackage = typeof s3toolsorgs3cmdPackage
