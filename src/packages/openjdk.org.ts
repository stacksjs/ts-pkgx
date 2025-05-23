export const openjdkorgPackage = {
  name: 'openjdk.org' as const,
  domain: 'openjdk.org' as const,
  description: 'Development kit for the Java programming language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openjdk.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +openjdk.org -- $SHELL -i' as const,
  programs: [
    'jar',
    'jarsigner',
    'java',
    'javac',
    'javadoc',
    'javap',
    'jcmd',
    'jconsole',
    'jdb',
    'jdeprscan',
    'jdeps',
    'jfr',
    'jhsdb',
    'jimage',
    'jinfo',
    'jlink',
    'jmap',
    'jmod',
    'jps',
    'jrunscript',
    'jshell',
    'jstack',
    'jstat',
    'jstatd',
    'keytool',
    'rmiregistry',
    'serialver',
  ] as const,
  companions: [] as const,
  dependencies: [
    'giflib.sourceforge.io',
    'harfbuzz.org^8',
    'libjpeg-turbo.org',
    'libpng.org',
    'littlecms.com',
    'openprinting.github.io/cups',
    'info-zip.org/unzip',
    'zlib.net',
    'libzip.org',
    'linuxalsa-project.org/alsa-libfreedesktop.org/fontconfigfreetype.orgx.org/x11x.org/extsx.org/xrandrx.org/xrenderx.org/xtx.org/xtstinfo-zip.org/zipdarwinsys.com/file',
    'alsa-project.org/alsa-lib',
    'freedesktop.org/fontconfig',
    'freetype.org',
    'x.org/x11',
    'x.org/exts',
    'x.org/xrandr',
    'x.org/xrender',
    'x.org/xt',
    'x.org/xtst',
    'info-zip.org/zip',
    'darwinsys.com/file',
  ] as const,
  versions: [
    '21.0.7.4',
    '21.0.6.6',
    '21.0.3.6',
    '17.0.11.4',
    '17.0.10.6',
    '11.0.23.6',
  ] as const,
  fullPath: 'openjdk.org' as const,
}

export type OpenjdkorgPackage = typeof openjdkorgPackage
