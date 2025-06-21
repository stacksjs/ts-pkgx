/**
 * **bzip2** - Package from pantry: sourceware.org/bzip2
 *
 * @domain `sourceware.org/bzip2`
 *
 * @install `launchpad install sourceware.org/bzip2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourcewareorgbzip2
 * console.log(pkg.name)        // "bzip2"
 * console.log(pkg.description) // "Package from pantry: sourceware.org/bzip2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceware-org/bzip2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourcewareorgbzip2Package = {
  /**
   * The display name of this package.
   */
  name: 'bzip2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceware.org/bzip2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceware.org/bzip2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceware.org/bzip2' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceware.org/bzip2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Sourcewareorgbzip2Package = typeof sourcewareorgbzip2Package
