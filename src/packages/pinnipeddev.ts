/**
 * **pinniped.dev** - Package from pantry: pinniped.dev
 *
 * @domain `pinniped.dev`
 *
 * @install `launchpad install pinniped.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pinnipeddev
 * console.log(pkg.name)        // "pinniped.dev"
 * console.log(pkg.description) // "Package from pantry: pinniped.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pinniped-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pinnipeddevPackage = {
  /**
   * The display name of this package.
   */
  name: 'pinniped.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pinniped.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pinniped.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pinniped.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pinniped.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pinniped.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pinniped.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PinnipeddevPackage = typeof pinnipeddevPackage
