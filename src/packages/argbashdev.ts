/**
 * **argbash.dev** - Package from pantry: argbash.dev
 *
 * @domain `argbash.dev`
 *
 * @install `launchpad install argbash.dev`
 * @dependencies `gnu.org/bash>=3`, `gnu.org/autoconf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.argbashdev
 * console.log(pkg.name)        // "argbash.dev"
 * console.log(pkg.description) // "Package from pantry: argbash.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/argbash-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const argbashdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'argbash.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'argbash.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: argbash.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install argbash.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +argbash.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install argbash.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/bash>=3',
    'gnu.org/autoconf',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/argbash.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ArgbashdevPackage = typeof argbashdevPackage
