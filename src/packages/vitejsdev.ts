/**
 * **vitejs.dev** - Package from pantry: vitejs.dev
 *
 * @domain `vitejs.dev`
 *
 * @install `launchpad install vitejs.dev`
 * @dependencies `nodejs.org^16 || ^18 || ^20`, `darwinsys.com/file`, `strace.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vitejsdev
 * console.log(pkg.name)        // "vitejs.dev"
 * console.log(pkg.description) // "Package from pantry: vitejs.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vitejs-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vitejsdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'vitejs.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vitejs.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vitejs.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install vitejs.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^16 || ^18 || ^20',
    'darwinsys.com/file',
    'strace.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vitejs.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VitejsdevPackage = typeof vitejsdevPackage
