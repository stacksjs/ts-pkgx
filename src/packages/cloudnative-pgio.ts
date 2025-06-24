/**
 * **cloudnative-pg.io** - Package from pantry: cloudnative-pg.io
 *
 * @domain `cloudnative-pg.io`
 *
 * @install `launchpad install cloudnative-pg.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cloudnativepgio
 * console.log(pkg.name)        // "cloudnative-pg.io"
 * console.log(pkg.description) // "Package from pantry: cloudnative-pg.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudnative-pg-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cloudnativepgioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cloudnative-pg.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cloudnative-pg.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cloudnative-pg.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cloudnative-pg.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cloudnative-pg.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cloudnative-pg.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cloudnative-pg.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CloudnativepgioPackage = typeof cloudnativepgioPackage
