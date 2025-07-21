/**
 * **testscript** - Package from pantry: go.dev/testscript
 *
 * @domain `go.dev/testscript`
 *
 * @install `launchpad install go.dev/testscript`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.godevtestscript
 * console.log(pkg.name)        // "testscript"
 * console.log(pkg.description) // "Package from pantry: go.dev/testscript"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-dev/testscript.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const godevtestscriptPackage = {
  /**
   * The display name of this package.
   */
  name: 'testscript' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.dev/testscript' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: go.dev/testscript' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install go.dev/testscript' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +go.dev/testscript -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install go.dev/testscript' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/go.dev/testscript/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GodevtestscriptPackage = typeof godevtestscriptPackage
