/**
 * **rename** - Package from pantry: plasmasturm.org/rename
 *
 * @domain `plasmasturm.org/rename`
 *
 * @install `launchpad install plasmasturm.org/rename`
 * @dependencies `perl.org>=5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.plasmasturmorgrename
 * console.log(pkg.name)        // "rename"
 * console.log(pkg.description) // "Package from pantry: plasmasturm.org/rename"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/plasmasturm-org/rename.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plasmasturmorgrenamePackage = {
  /**
   * The display name of this package.
   */
  name: 'rename' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'plasmasturm.org/rename' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: plasmasturm.org/rename' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install plasmasturm.org/rename' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org>=5',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/plasmasturm.org/rename/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PlasmasturmorgrenamePackage = typeof plasmasturmorgrenamePackage
