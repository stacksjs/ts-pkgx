/**
 * **keephq.dev** - Package from pantry: keephq.dev
 *
 * @domain `keephq.dev`
 *
 * @install `launchpad install keephq.dev`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.keephqdev
 * console.log(pkg.name)        // "keephq.dev"
 * console.log(pkg.description) // "Package from pantry: keephq.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/keephq-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const keephqdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'keephq.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'keephq.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: keephq.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install keephq.dev' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/keephq.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KeephqdevPackage = typeof keephqdevPackage
