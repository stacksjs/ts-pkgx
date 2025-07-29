/**
 * **kpt.dev** - pkgx package
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
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kpt.dev' as const,
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kpt.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kpt.dev' as const,
}

export type KptdevPackage = typeof kptdevPackage
