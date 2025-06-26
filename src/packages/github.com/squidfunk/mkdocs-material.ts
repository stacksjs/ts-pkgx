/**
 * **mkdocs-material** - Package from pantry: github.com/squidfunk/mkdocs-material
 *
 * @domain `github.com/squidfunk/mkdocs-material`
 *
 * @install `launchpad install github.com/squidfunk/mkdocs-material`
 * @dependencies `pkgx.sh^1`, `sass-lang.com/libsass^3.6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsquidfunkmkdocsmaterial
 * console.log(pkg.name)        // "mkdocs-material"
 * console.log(pkg.description) // "Package from pantry: github.com/squidfunk/mkdoc..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/squidfunk/mkdocs-material.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsquidfunkmkdocsmaterialPackage = {
  /**
   * The display name of this package.
   */
  name: 'mkdocs-material' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/squidfunk/mkdocs-material' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/squidfunk/mkdocs-material' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/squidfunk/mkdocs-material' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/squidfunk/mkdocs-material -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/squidfunk/mkdocs-material' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'sass-lang.com/libsass^3.6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/squidfunk/mkdocs-material/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsquidfunkmkdocsmaterialPackage = typeof githubcomsquidfunkmkdocsmaterialPackage
