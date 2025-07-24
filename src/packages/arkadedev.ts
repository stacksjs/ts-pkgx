/**
 * **arkade.dev** - Package from pantry: arkade.dev
 *
 * @domain `arkade.dev`
 *
 * @install `launchpad install arkade.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.arkadedev
 * console.log(pkg.name)        // "arkade.dev"
 * console.log(pkg.description) // "Package from pantry: arkade.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/arkade-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const arkadedevPackage = {
  /**
   * The display name of this package.
   */
  name: 'arkade.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'arkade.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: arkade.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install arkade.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +arkade.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install arkade.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/arkade.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ArkadedevPackage = typeof arkadedevPackage
