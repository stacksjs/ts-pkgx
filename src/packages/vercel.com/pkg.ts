/**
 * **pkg** - Package your Node.js project into an executable
 *
 * @domain `vercel.com/pkg`
 * @programs `pkg`
 * @version `5.8.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pkg`
 * @name `pkg`
 * @dependencies `nodejs.org`, `npmjs.com`, `nodejs.org`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pkg
 * // Or access via domain
 * const samePkg = pantry.vercelcompkg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pkg"
 * console.log(pkg.description) // "Package your Node.js project into an executable"
 * console.log(pkg.programs)    // ["pkg"]
 * console.log(pkg.versions[0]) // "5.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vercel-com/pkg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgPackage = {
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
  description: 'Package your Node.js project into an executable' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vercel.com/pkg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pkg' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pkg',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
    'npmjs.com',
    'nodejs.org',
    'vercel.com/pkg',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.8.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type PkgPackage = typeof pkgPackage
