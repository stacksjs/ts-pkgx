/**
 * **gitsign** - Package from pantry: sigstore.dev/gitsign
 *
 * @domain `sigstore.dev/gitsign`
 *
 * @install `launchpad install sigstore.dev/gitsign`
 * @dependencies `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sigstoredevgitsign
 * console.log(pkg.name)        // "gitsign"
 * console.log(pkg.description) // "Package from pantry: sigstore.dev/gitsign"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sigstore-dev/gitsign.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sigstoredevgitsignPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitsign' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sigstore.dev/gitsign' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sigstore.dev/gitsign' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sigstore.dev/gitsign' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sigstore.dev/gitsign/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SigstoredevgitsignPackage = typeof sigstoredevgitsignPackage
