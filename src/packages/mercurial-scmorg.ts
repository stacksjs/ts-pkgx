/**
 * **mercurial-scm.org** - Package from pantry: mercurial-scm.org
 *
 * @domain `mercurial-scm.org`
 *
 * @install `launchpad install mercurial-scm.org`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mercurialscmorg
 * console.log(pkg.name)        // "mercurial-scm.org"
 * console.log(pkg.description) // "Package from pantry: mercurial-scm.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mercurial-scm-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mercurialscmorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mercurial-scm.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mercurial-scm.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mercurial-scm.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mercurial-scm.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mercurial-scm.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mercurial-scm.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mercurial-scm.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MercurialscmorgPackage = typeof mercurialscmorgPackage
