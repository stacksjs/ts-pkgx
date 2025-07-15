/**
 * **epsilon-project.sourceforge.io** - Package from pantry: epsilon-project.sourceforge.io
 *
 * @domain `epsilon-project.sourceforge.io`
 *
 * @install `launchpad install epsilon-project.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.epsilonprojectsourceforgeio
 * console.log(pkg.name)        // "epsilon-project.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: epsilon-project.sourceforg..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/epsilon-project-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const epsilonprojectsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'epsilon-project.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'epsilon-project.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: epsilon-project.sourceforge.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install epsilon-project.sourceforge.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +epsilon-project.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install epsilon-project.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/epsilon-project.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EpsilonprojectsourceforgeioPackage = typeof epsilonprojectsourceforgeioPackage
