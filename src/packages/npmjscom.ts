/**
 * **npmjs.com** - Package from pantry: npmjs.com
 *
 * @domain `npmjs.com`
 *
 * @install `launchpad install npmjs.com`
 * @dependencies `nodejs.org`, `nodejs.org<20.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.npmjscom
 * console.log(pkg.name)        // "npmjs.com"
 * console.log(pkg.description) // "Package from pantry: npmjs.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/npmjs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const npmjscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'npmjs.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'npmjs.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: npmjs.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install npmjs.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
    'nodejs.org<20.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/npmjs.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NpmjscomPackage = typeof npmjscomPackage
