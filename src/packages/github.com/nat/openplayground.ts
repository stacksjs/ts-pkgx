/**
 * **openplayground** - An LLM playground you can run on your laptop
 *
 * @domain `github.com/nat/openplayground`
 * @programs `openplayground`
 * @version `2023.6.5` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install openplayground`
 * @name `openplayground`
 * @dependencies `python.org~3.11`, `gnu.org/bash`, `tea.xyz^0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.openplayground
 * // Or access via domain
 * const samePkg = pantry.githubcomnatopenplayground
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openplayground"
 * console.log(pkg.description) // "An LLM playground you can run on your laptop"
 * console.log(pkg.programs)    // ["openplayground"]
 * console.log(pkg.versions[0]) // "2023.6.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nat/openplayground.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openplaygroundPackage = {
  /**
   * The display name of this package.
   */
  name: 'openplayground' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nat/openplayground' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An LLM playground you can run on your laptop' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nat/openplayground/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install openplayground' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'openplayground',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'gnu.org/bash',
    'tea.xyz^0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.6.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type OpenplaygroundPackage = typeof openplaygroundPackage
