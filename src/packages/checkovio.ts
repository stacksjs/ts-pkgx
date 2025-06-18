/**
 * **checkov.io** - Package from pantry: checkov.io
 *
 * @domain `checkov.io`
 *
 * @install `launchpad install checkov.io`
 * @dependencies `pkgx.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.checkovio
 * console.log(pkg.name)        // "checkov.io"
 * console.log(pkg.description) // "Package from pantry: checkov.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/checkov-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const checkovioPackage = {
  /**
   * The display name of this package.
   */
  name: 'checkov.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'checkov.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: checkov.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install checkov.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/checkov.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CheckovioPackage = typeof checkovioPackage
