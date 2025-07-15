/**
 * **pkcs11-helper** - Package from pantry: github.com/OpenSC/pkcs11-helper
 *
 * @domain `github.com/OpenSC/pkcs11-helper`
 *
 * @install `launchpad install github.com/OpenSC/pkcs11-helper`
 * @dependencies `openssl.org^3.1.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomopenscpkcs11helper
 * console.log(pkg.name)        // "pkcs11-helper"
 * console.log(pkg.description) // "Package from pantry: github.com/OpenSC/pkcs11-h..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/OpenSC/pkcs11-helper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomopenscpkcs11helperPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkcs11-helper' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/OpenSC/pkcs11-helper' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/OpenSC/pkcs11-helper' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/OpenSC/pkcs11-helper' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/OpenSC/pkcs11-helper -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/OpenSC/pkcs11-helper' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^3.1.0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/OpenSC/pkcs11-helper/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomopenscpkcs11helperPackage = typeof githubcomopenscpkcs11helperPackage
