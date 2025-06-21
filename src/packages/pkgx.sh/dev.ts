/**
 * **dev** - Package from pantry: pkgx.sh/dev
 *
 * @domain `pkgx.sh/dev`
 *
 * @install `launchpad install pkgx.sh/dev`
 * @dependencies `pkgx.sh^1,^2.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkgxshdev
 * console.log(pkg.name)        // "dev"
 * console.log(pkg.description) // "Package from pantry: pkgx.sh/dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh/dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgxshdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh/dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pkgx.sh/dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pkgx.sh/dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1,^2.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PkgxshdevPackage = typeof pkgxshdevPackage
