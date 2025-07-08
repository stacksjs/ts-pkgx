/**
 * **mkdocs.org** - Package from pantry: mkdocs.org
 *
 * @domain `mkdocs.org`
 *
 * @install `launchpad install mkdocs.org`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mkdocsorg
 * console.log(pkg.name)        // "mkdocs.org"
 * console.log(pkg.description) // "Package from pantry: mkdocs.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mkdocs-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mkdocsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mkdocs.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mkdocs.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mkdocs.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mkdocs.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mkdocs.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mkdocs.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mkdocs.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MkdocsorgPackage = typeof mkdocsorgPackage
