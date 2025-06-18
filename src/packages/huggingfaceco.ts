/**
 * **huggingface.co** - Package from pantry: huggingface.co
 *
 * @domain `huggingface.co`
 *
 * @install `launchpad install huggingface.co`
 * @dependencies `pkgx.sh^1`, `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.huggingfaceco
 * console.log(pkg.name)        // "huggingface.co"
 * console.log(pkg.description) // "Package from pantry: huggingface.co"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/huggingface-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const huggingfacecoPackage = {
  /**
   * The display name of this package.
   */
  name: 'huggingface.co' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'huggingface.co' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: huggingface.co' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install huggingface.co' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/huggingface.co/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HuggingfacecoPackage = typeof huggingfacecoPackage
