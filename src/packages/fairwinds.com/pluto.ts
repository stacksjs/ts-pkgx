/**
 * **pluto** - Package from pantry: fairwinds.com/pluto
 *
 * @domain `fairwinds.com/pluto`
 *
 * @install `launchpad install fairwinds.com/pluto`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fairwindscompluto
 * console.log(pkg.name)        // "pluto"
 * console.log(pkg.description) // "Package from pantry: fairwinds.com/pluto"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fairwinds-com/pluto.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fairwindscomplutoPackage = {
  /**
   * The display name of this package.
   */
  name: 'pluto' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fairwinds.com/pluto' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fairwinds.com/pluto' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fairwinds.com/pluto' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fairwinds.com/pluto -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fairwinds.com/pluto' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fairwinds.com/pluto/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FairwindscomplutoPackage = typeof fairwindscomplutoPackage
