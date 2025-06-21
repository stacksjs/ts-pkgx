/**
 * **cosign** - Package from pantry: sigstore.dev/cosign
 *
 * @domain `sigstore.dev/cosign`
 *
 * @install `launchpad install sigstore.dev/cosign`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sigstoredevcosign
 * console.log(pkg.name)        // "cosign"
 * console.log(pkg.description) // "Package from pantry: sigstore.dev/cosign"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sigstore-dev/cosign.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sigstoredevcosignPackage = {
  /**
   * The display name of this package.
   */
  name: 'cosign' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sigstore.dev/cosign' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sigstore.dev/cosign' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sigstore.dev/cosign' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sigstore.dev/cosign/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SigstoredevcosignPackage = typeof sigstoredevcosignPackage
