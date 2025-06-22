/**
 * **jumppad.dev** - Package from pantry: jumppad.dev
 *
 * @domain `jumppad.dev`
 *
 * @install `launchpad install jumppad.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jumppaddev
 * console.log(pkg.name)        // "jumppad.dev"
 * console.log(pkg.description) // "Package from pantry: jumppad.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jumppad-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jumppaddevPackage = {
  /**
   * The display name of this package.
   */
  name: 'jumppad.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jumppad.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jumppad.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jumppad.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jumppad.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jumppad.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jumppad.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JumppaddevPackage = typeof jumppaddevPackage
