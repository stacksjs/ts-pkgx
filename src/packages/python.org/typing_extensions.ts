/**
 * **typing_extensions** - Package from pantry: python.org/typing_extensions
 *
 * @domain `python.org/typing_extensions`
 *
 * @install `launchpad install python.org/typing_extensions`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pythonorgtyping_extensions
 * console.log(pkg.name)        // "typing_extensions"
 * console.log(pkg.description) // "Package from pantry: python.org/typing_extensions"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/python-org/typing_extensions.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonorgtyping_extensionsPackage = {
  /**
   * The display name of this package.
   */
  name: 'typing_extensions' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'python.org/typing_extensions' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: python.org/typing_extensions' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install python.org/typing_extensions' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/python.org/typing_extensions/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Pythonorgtyping_extensionsPackage = typeof pythonorgtyping_extensionsPackage
