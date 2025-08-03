/**
 * **wait4x.dev** - Package from pantry: wait4x.dev
 *
 * @domain `wait4x.dev`
 *
 * @install `launchpad install wait4x.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wait4xdev
 * console.log(pkg.name)        // "wait4x.dev"
 * console.log(pkg.description) // "Package from pantry: wait4x.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wait4x-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wait4xdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'wait4x.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wait4x.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wait4x.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wait4x.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +wait4x.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install wait4x.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wait4x.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Wait4xdevPackage = typeof wait4xdevPackage
