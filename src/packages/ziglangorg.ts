/**
 * **ziglang.org** - Package from pantry: ziglang.org
 *
 * @domain `ziglang.org`
 *
 * @install `launchpad install ziglang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ziglangorg
 * console.log(pkg.name)        // "ziglang.org"
 * console.log(pkg.description) // "Package from pantry: ziglang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ziglang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ziglangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ziglang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ziglang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ziglang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ziglang.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ziglang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ZiglangorgPackage = typeof ziglangorgPackage
