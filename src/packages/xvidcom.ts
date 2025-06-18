/**
 * **xvid.com** - Package from pantry: xvid.com
 *
 * @domain `xvid.com`
 *
 * @install `launchpad install xvid.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xvidcom
 * console.log(pkg.name)        // "xvid.com"
 * console.log(pkg.description) // "Package from pantry: xvid.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xvid-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xvidcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'xvid.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xvid.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xvid.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install xvid.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xvid.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XvidcomPackage = typeof xvidcomPackage
