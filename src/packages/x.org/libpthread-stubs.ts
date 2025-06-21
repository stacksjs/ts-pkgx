/**
 * **libpthread-stubs** - Package from pantry: x.org/libpthread-stubs
 *
 * @domain `x.org/libpthread-stubs`
 *
 * @install `launchpad install x.org/libpthread-stubs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorglibpthreadstubs
 * console.log(pkg.name)        // "libpthread-stubs"
 * console.log(pkg.description) // "Package from pantry: x.org/libpthread-stubs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libpthread-stubs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorglibpthreadstubsPackage = {
  /**
   * The display name of this package.
   */
  name: 'libpthread-stubs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libpthread-stubs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/libpthread-stubs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/libpthread-stubs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libpthread-stubs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorglibpthreadstubsPackage = typeof xorglibpthreadstubsPackage
