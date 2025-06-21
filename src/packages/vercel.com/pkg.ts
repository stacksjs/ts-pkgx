/**
 * **pkg** - Package from pantry: vercel.com/pkg
 *
 * @domain `vercel.com/pkg`
 *
 * @install `launchpad install vercel.com/pkg`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vercelcompkg
 * console.log(pkg.name)        // "pkg"
 * console.log(pkg.description) // "Package from pantry: vercel.com/pkg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vercel-com/pkg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vercelcompkgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vercel.com/pkg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vercel.com/pkg' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install vercel.com/pkg' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vercel.com/pkg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VercelcompkgPackage = typeof vercelcompkgPackage
