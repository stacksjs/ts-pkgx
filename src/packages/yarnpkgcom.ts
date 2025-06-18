/**
 * **yarnpkg.com** - Package from pantry: yarnpkg.com
 *
 * @domain `yarnpkg.com`
 *
 * @install `launchpad install yarnpkg.com`
 * @dependencies `nodejs.org`, `classic.yarnpkg.com^1 # works and prevents bootstrapping issues`, `nodejs.org>=18.3<23`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.yarnpkgcom
 * console.log(pkg.name)        // "yarnpkg.com"
 * console.log(pkg.description) // "Package from pantry: yarnpkg.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yarnpkg-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yarnpkgcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'yarnpkg.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yarnpkg.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: yarnpkg.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install yarnpkg.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
    'classic.yarnpkg.com^1 # works and prevents bootstrapping issues',
    'nodejs.org>=18.3<23',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yarnpkg.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type YarnpkgcomPackage = typeof yarnpkgcomPackage
