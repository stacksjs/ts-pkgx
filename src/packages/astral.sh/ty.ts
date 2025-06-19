/**
 * **ty** - An extremely fast Python type checker and language server, written in Rust.
 *
 * @domain `astral.sh/ty`
 * @programs `ty`
 * @version `0.0.1.8` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ty`
 * @name `ty`
 * @dependencies `pkgx.sh@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ty
 * // Or access via domain
 * const samePkg = pantry.astralshty
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ty"
 * console.log(pkg.description) // "An extremely fast Python type checker and langu..."
 * console.log(pkg.programs)    // ["ty"]
 * console.log(pkg.versions[0]) // "0.0.1.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/astral-sh/ty.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tyPackage = {
  /**
   * The display name of this package.
   */
  name: 'ty' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'astral.sh/ty' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An extremely fast Python type checker and language server, written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/astral.sh/ty/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/astral-sh/ty' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ty' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ty',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.1.8',
    '0.0.1.7',
    '0.0.1.6',
    '0.0.1.5',
    '0.0.1.4',
    '0.0.1.3',
    '0.0.1.2',
    '0.0.1.1',
    '0.0.0.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TyPackage = typeof tyPackage
