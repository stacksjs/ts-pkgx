/**
 * **libffi** - Package from pantry: sourceware.org/libffi
 *
 * @domain `sourceware.org/libffi`
 *
 * @install `launchpad install sourceware.org/libffi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourcewareorglibffi
 * console.log(pkg.name)        // "libffi"
 * console.log(pkg.description) // "Package from pantry: sourceware.org/libffi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceware-org/libffi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourcewareorglibffiPackage = {
  /**
   * The display name of this package.
   */
  name: 'libffi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceware.org/libffi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceware.org/libffi' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceware.org/libffi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceware.org/libffi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SourcewareorglibffiPackage = typeof sourcewareorglibffiPackage
