/**
 * **yadm.io** - Package from pantry: yadm.io
 *
 * @domain `yadm.io`
 *
 * @install `launchpad install yadm.io`
 * @dependencies `git-scm.org`, `gnu.org/bash`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.yadmio
 * console.log(pkg.name)        // "yadm.io"
 * console.log(pkg.description) // "Package from pantry: yadm.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yadm-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yadmioPackage = {
  /**
   * The display name of this package.
   */
  name: 'yadm.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yadm.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: yadm.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install yadm.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
    'gnu.org/bash',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yadm.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type YadmioPackage = typeof yadmioPackage
