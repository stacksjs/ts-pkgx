/**
 * **encore.dev** - Package from pantry: encore.dev
 *
 * @domain `encore.dev`
 *
 * @install `launchpad install encore.dev`
 * @dependencies `encore.dev/go^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.encoredev
 * console.log(pkg.name)        // "encore.dev"
 * console.log(pkg.description) // "Package from pantry: encore.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/encore-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const encoredevPackage = {
  /**
   * The display name of this package.
   */
  name: 'encore.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'encore.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: encore.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install encore.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +encore.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install encore.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'encore.dev/go^1.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/encore.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EncoredevPackage = typeof encoredevPackage
