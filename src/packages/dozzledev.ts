/**
 * **dozzle.dev** - Package from pantry: dozzle.dev
 *
 * @domain `dozzle.dev`
 *
 * @install `launchpad install dozzle.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dozzledev
 * console.log(pkg.name)        // "dozzle.dev"
 * console.log(pkg.description) // "Package from pantry: dozzle.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dozzle-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dozzledevPackage = {
  /**
   * The display name of this package.
   */
  name: 'dozzle.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dozzle.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dozzle.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dozzle.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dozzle.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dozzle.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dozzle.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DozzledevPackage = typeof dozzledevPackage
