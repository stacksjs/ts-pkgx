/**
 * **borgbackup.org** - Package from pantry: borgbackup.org
 *
 * @domain `borgbackup.org`
 *
 * @install `launchpad install borgbackup.org`
 * @dependencies `pkgx.sh^1`, `github.com/Cyan4973/xxHash^0.8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.borgbackuporg
 * console.log(pkg.name)        // "borgbackup.org"
 * console.log(pkg.description) // "Package from pantry: borgbackup.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/borgbackup-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const borgbackuporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'borgbackup.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'borgbackup.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: borgbackup.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install borgbackup.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +borgbackup.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install borgbackup.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'github.com/Cyan4973/xxHash^0.8',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/borgbackup.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BorgbackuporgPackage = typeof borgbackuporgPackage
