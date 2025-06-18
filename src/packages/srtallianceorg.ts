/**
 * **srtalliance.org** - Package from pantry: srtalliance.org
 *
 * @domain `srtalliance.org`
 *
 * @install `launchpad install srtalliance.org`
 * @dependencies `openssl.org`, `cmake.org`, `freedesktop.org/pkg-config`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.srtallianceorg
 * console.log(pkg.name)        // "srtalliance.org"
 * console.log(pkg.description) // "Package from pantry: srtalliance.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/srtalliance-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const srtallianceorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'srtalliance.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'srtalliance.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: srtalliance.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install srtalliance.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org',
    'cmake.org',
    'freedesktop.org/pkg-config',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/srtalliance.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SrtallianceorgPackage = typeof srtallianceorgPackage
