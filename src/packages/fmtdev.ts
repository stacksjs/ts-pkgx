/**
 * **fmt.dev** - Package from pantry: fmt.dev
 *
 * @domain `fmt.dev`
 *
 * @install `launchpad install fmt.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fmtdev
 * console.log(pkg.name)        // "fmt.dev"
 * console.log(pkg.description) // "Package from pantry: fmt.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fmt-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fmtdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'fmt.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fmt.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fmt.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fmt.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fmt.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fmt.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fmt.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FmtdevPackage = typeof fmtdevPackage
