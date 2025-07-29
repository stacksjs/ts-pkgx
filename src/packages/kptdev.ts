/**
 * **kpt.dev** - Package from pantry: kpt.dev
 *
 * @domain `kpt.dev`
 *
 * @install `launchpad install kpt.dev`
 * @dependencies `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kptdev
 * console.log(pkg.name)        // "kpt.dev"
 * console.log(pkg.description) // "Package from pantry: kpt.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kpt-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kptdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'kpt.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kpt.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kpt.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kpt.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kpt.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kpt.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kpt.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KptdevPackage = typeof kptdevPackage
