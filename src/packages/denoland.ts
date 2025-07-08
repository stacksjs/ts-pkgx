/**
 * **deno.land** - Package from pantry: deno.land
 *
 * @domain `deno.land`
 *
 * @install `launchpad install deno.land`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.denoland
 * console.log(pkg.name)        // "deno.land"
 * console.log(pkg.description) // "Package from pantry: deno.land"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/deno-land.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const denolandPackage = {
  /**
   * The display name of this package.
   */
  name: 'deno.land' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'deno.land' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: deno.land' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install deno.land' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +deno.land -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install deno.land' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/deno.land/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DenolandPackage = typeof denolandPackage
