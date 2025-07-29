/**
 * **dprint.dev** - Package from pantry: dprint.dev
 *
 * @domain `dprint.dev`
 *
 * @install `launchpad install dprint.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dprintdev
 * console.log(pkg.name)        // "dprint.dev"
 * console.log(pkg.description) // "Package from pantry: dprint.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dprint-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dprintdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'dprint.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dprint.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dprint.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dprint.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dprint.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dprint.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dprint.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DprintdevPackage = typeof dprintdevPackage
