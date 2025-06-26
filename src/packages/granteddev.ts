/**
 * **granted.dev** - Package from pantry: granted.dev
 *
 * @domain `granted.dev`
 *
 * @install `launchpad install granted.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.granteddev
 * console.log(pkg.name)        // "granted.dev"
 * console.log(pkg.description) // "Package from pantry: granted.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/granted-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const granteddevPackage = {
  /**
   * The display name of this package.
   */
  name: 'granted.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'granted.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: granted.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install granted.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +granted.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install granted.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/granted.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GranteddevPackage = typeof granteddevPackage
