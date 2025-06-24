/**
 * **tailcall.run** - Package from pantry: tailcall.run
 *
 * @domain `tailcall.run`
 *
 * @install `launchpad install tailcall.run`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tailcallrun
 * console.log(pkg.name)        // "tailcall.run"
 * console.log(pkg.description) // "Package from pantry: tailcall.run"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tailcall-run.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tailcallrunPackage = {
  /**
   * The display name of this package.
   */
  name: 'tailcall.run' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tailcall.run' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tailcall.run' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tailcall.run' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tailcall.run -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tailcall.run' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tailcall.run/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TailcallrunPackage = typeof tailcallrunPackage
