/**
 * **tailwindcss** - A utility-first CSS framework for rapid UI development.
 *
 * @domain `tailwindcss.com`
 * @programs `tailwindcss`
 * @version `4.1.10` (44 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) tailwindcss`
 * @name `tailwindcss`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tailwindcss
 * // Or access via domain
 * const samePkg = pantry.tailwindcsscom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tailwindcss"
 * console.log(pkg.description) // "A utility-first CSS framework for rapid UI deve..."
 * console.log(pkg.programs)    // ["tailwindcss"]
 * console.log(pkg.versions[0]) // "4.1.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tailwindcss-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tailwindcssPackage = {
  /**
   * The display name of this package.
   */
  name: 'tailwindcss' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tailwindcss.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A utility-first CSS framework for rapid UI development.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tailwindcss.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) tailwindcss' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tailwindcss',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.1.10',
    '4.1.9',
    '4.1.8',
    '4.1.7',
    '4.1.6',
    '4.1.5',
    '4.1.4',
    '4.1.3',
    '4.1.2',
    '4.1.1',
    '4.1.0',
    '4.0.17',
    '4.0.16',
    '4.0.15',
    '4.0.14',
    '4.0.13',
    '4.0.12',
    '4.0.11',
    '4.0.10',
    '4.0.9',
    '4.0.8',
    '4.0.7',
    '4.0.6',
    '4.0.5',
    '4.0.4',
    '4.0.3',
    '4.0.2',
    '4.0.1',
    '4.0.0',
    '3.4.17',
    '3.4.16',
    '3.4.15',
    '3.4.14',
    '3.4.13',
    '3.4.12',
    '3.4.11',
    '3.4.10',
    '3.4.9',
    '3.4.8',
    '3.4.7',
    '3.4.6',
    '3.4.5',
    '3.4.4',
    '3.4.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'tailwindcss.com' as const,
}

export type TailwindcssPackage = typeof tailwindcssPackage
