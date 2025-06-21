/**
 * **v2** - Package from pantry: pcre.org/v2
 *
 * @domain `pcre.org/v2`
 *
 * @install `launchpad install pcre.org/v2`
 * @dependencies `sourceware.org/bzip2@1`, `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pcreorgv2
 * console.log(pkg.name)        // "v2"
 * console.log(pkg.description) // "Package from pantry: pcre.org/v2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pcre-org/v2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pcreorgv2Package = {
  /**
   * The display name of this package.
   */
  name: 'v2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pcre.org/v2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pcre.org/v2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pcre.org/v2' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/bzip2@1',
    'zlib.net@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pcre.org/v2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Pcreorgv2Package = typeof pcreorgv2Package
