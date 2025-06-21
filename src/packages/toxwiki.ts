/**
 * **tox.wiki** - Package from pantry: tox.wiki
 *
 * @domain `tox.wiki`
 *
 * @install `launchpad install tox.wiki`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.toxwiki
 * console.log(pkg.name)        // "tox.wiki"
 * console.log(pkg.description) // "Package from pantry: tox.wiki"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tox-wiki.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const toxwikiPackage = {
  /**
   * The display name of this package.
   */
  name: 'tox.wiki' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tox.wiki' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tox.wiki' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tox.wiki' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tox.wiki/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ToxwikiPackage = typeof toxwikiPackage
