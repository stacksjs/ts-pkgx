/**
 * **nasm.us** - Package from pantry: nasm.us
 *
 * @domain `nasm.us`
 *
 * @install `launchpad install nasm.us`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nasmus
 * console.log(pkg.name)        // "nasm.us"
 * console.log(pkg.description) // "Package from pantry: nasm.us"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nasm-us.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nasmusPackage = {
  /**
   * The display name of this package.
   */
  name: 'nasm.us' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nasm.us' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nasm.us' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install nasm.us' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nasm.us/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NasmusPackage = typeof nasmusPackage
