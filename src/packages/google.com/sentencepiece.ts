/**
 * **sentencepiece** - Package from pantry: google.com/sentencepiece
 *
 * @domain `google.com/sentencepiece`
 *
 * @install `launchpad install google.com/sentencepiece`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomsentencepiece
 * console.log(pkg.name)        // "sentencepiece"
 * console.log(pkg.description) // "Package from pantry: google.com/sentencepiece"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/sentencepiece.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomsentencepiecePackage = {
  /**
   * The display name of this package.
   */
  name: 'sentencepiece' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/sentencepiece' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: google.com/sentencepiece' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install google.com/sentencepiece' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.com/sentencepiece -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install google.com/sentencepiece' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/sentencepiece/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GooglecomsentencepiecePackage = typeof googlecomsentencepiecePackage
