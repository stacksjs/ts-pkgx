/**
 * **kluctl.io** - Package from pantry: kluctl.io
 *
 * @domain `kluctl.io`
 *
 * @install `launchpad install kluctl.io`
 * @dependencies `go.dev^1.21`, `nodejs.org^18`, `npmjs.com`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kluctlio
 * console.log(pkg.name)        // "kluctl.io"
 * console.log(pkg.description) // "Package from pantry: kluctl.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kluctl-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kluctlioPackage = {
  /**
   * The display name of this package.
   */
  name: 'kluctl.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kluctl.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kluctl.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install kluctl.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
    'nodejs.org^18',
    'npmjs.com',
    'gnu.org/make',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kluctl.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KluctlioPackage = typeof kluctlioPackage
