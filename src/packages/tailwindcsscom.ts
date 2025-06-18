/**
 * **tailwindcss.com** - Package from pantry: tailwindcss.com
 *
 * @domain `tailwindcss.com`
 *
 * @install `launchpad install tailwindcss.com`
 * @dependencies `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tailwindcsscom
 * console.log(pkg.name)        // "tailwindcss.com"
 * console.log(pkg.description) // "Package from pantry: tailwindcss.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tailwindcss-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tailwindcsscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'tailwindcss.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tailwindcss.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tailwindcss.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tailwindcss.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tailwindcss.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TailwindcsscomPackage = typeof tailwindcsscomPackage
